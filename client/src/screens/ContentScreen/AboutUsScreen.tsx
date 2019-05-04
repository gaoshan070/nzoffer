import React from 'react';
import { observer } from 'mobx-react-lite';
import { Heading, FONT_SIZE, Text } from '../../styles';
import { ContentScreenWrapper } from './ContentScreenWrapper';
import { P } from './P';
import { List } from './List';

const AboutUsScreen: React.FC = observer(() => (
  <ContentScreenWrapper pageTitle="关于我们">
    <span>offer111是一个一站式智能留学在线平台。</span> <br />
    <span>我们的目标是：让留学变得超级简单。</span>
    <Heading
      size={FONT_SIZE.bodyHeading}
      css={{
        'margin-block-end': 0,
      }}
    >
      传统留学行业的痛点：
    </Heading>
    <List isOrdered>
      <li>留学中介通常收取高额服务费</li>
      <li>留学顾问经验不足，给出不够专业的咨询建议</li>
      <li>学生浪费很多时间比较并选择出相对满意的留学中介机构</li>
      <li>申请学校的过程可能长达数周，甚至2个多月</li>
      <li>大多留学生抵达国外，立即失去了国内中介的支持，感觉孤立无援</li>
    </List>
    <P>
      offer111
      运用最先进的计算机及互联网技术，通过对数以万计的课程数据的分析、比对、和处理。除了技术团队，offer111的核心壁垒是从事留学咨询行业10年以上的专家花费超过几千个小时的心血，集合各种可能的变量，为留学生用户打造出的一款快捷、便利而且免费使用的出国留学在线通道。精准而专业的课程匹配是offer111与众不同的最大亮点。
    </P>
    <P>
      Offer111通过整合各个留学目标国所有有价值的学校资源，倾心服务广大留学生群体，努力做到以下几点：
    </P>
    <List>
      <li>不断实时更新数据库，给留学生用户提供最精准的课程及学校匹配</li>
      <li>
        通过手机应用和微信，让用户随时随地可以查询自己的学校及签证申请进度
      </li>
      <li>提供24/7 专业客服服务，为少数有特殊需求的客户排除疑虑</li>
      <li>
        利用国外人力资源，为已登陆留学国的用户提供全方位后续服务（包括：接机，安排住宿，熟悉学校，以及与当地生活相关的其它协助）
      </li>
    </List>
    <Text mt="18px" fontSize="18px" fontWeight={900} lineHeight={1.5}>
      offer111的使命：通过数据智能和专业精神打造一个划时代的、全球领先的、智能化留学在线平台，让留学变得超级简单！
    </Text>
  </ContentScreenWrapper>
));

export default AboutUsScreen;
