interface IJWT {
  header: {
    alg: string;
    typ: string;
  };
  payload: {
    aud: string;
    exp: number;
    iat: number;
    iss: string;
    jti: string;
    sub: string;
    userId: string;
  };
}

export function getJWTObject(): IJWT {
  const jwt = window.localStorage.getItem('offer111-jwt') || '';

  if (!jwt) {
    return {
      header: {
        alg: '',
        typ: '',
      },
      payload: {
        aud: '',
        exp: 0,
        iat: 0,
        iss: '',
        jti: '',
        sub: '',
        userId: '',
      },
    };
  }

  return {
    header: JSON.parse(window.atob(jwt.split('.')[0])),
    payload: JSON.parse(window.atob(jwt.split('.')[1])),
  };
}

export function getUserId(): string {
  const result = getJWTObject();
  return result.payload.userId ? result.payload.userId : '';
}
