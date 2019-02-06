const errors = require('@feathersjs/errors');
const {
  checkContext,
} = require('feathers-hooks-common');

function getItems(context) {
  if (
    context.params &&
    context.params._actOn === 'dispatch'
  )
    return context.dispatch;

  const items =
    context.type === 'before'
      ? context.data
      : context.result;
  return items && context.method === 'find'
    ? items.data || items
    : items;
}

function getByDot(obj, path) {
  if (typeof obj !== 'object' || obj === null)
    return undefined;

  if (path.indexOf('.') === -1) {
    return obj[path];
  }

  return path
    .split('.')
    .reduce(
      (obj1, part) =>
        typeof obj1 === 'object' && obj1 !== null
          ? obj1[part]
          : undefined,
      obj,
    );
}

function existsByDot(obj, path) {
  const parts = path.split('.');
  const nonLeafLen = parts.length - 1;

  for (let i = 0; i < nonLeafLen; i++) {
    let part = parts[i];

    if (!(part in obj)) {
      return false;
    }

    obj = obj[part];

    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
  }

  return parts[nonLeafLen] in obj;
}

function areFieldsExist({
  fieldNames,
  nameInErrorMsg,
}) {
  return context => {
    checkContext(
      context,
      'before',
      ['create', 'update', 'patch'],
      'required',
    );
    const items = getItems(context);

    (Array.isArray(items) ? items : [items]).forEach(
      item => {
        fieldNames.forEach(name => {
          let displayName = name;

          if (
            nameInErrorMsg != null &&
            nameInErrorMsg.hasOwnProperty(name)
          ) {
            displayName = nameInErrorMsg[name];
          }

          if (!existsByDot(item, name))
            throw new errors.BadRequest(
              `${displayName}不存在.`,
            );
          const value = getByDot(item, name);
          if (!value && value !== 0 && value !== false)
            throw new errors.BadRequest(
              `${displayName}不可以为空`,
            );
        });
      },
    );
  };
}

module.exports = {
  areFieldsExist,
};
