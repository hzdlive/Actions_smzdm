## 特别声明: 

* 本仓库发布的 Actions_smzdm 项目中涉及的任何解锁和解密分析脚本，仅用于测试和学习研究，禁止用于商业用途，不能保证其合法性，准确性，完整性和有效性，请根据情况自行判断.

* 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。

* jiegto 对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害.

* 间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, jiegto 对于由此引起的任何隐私泄漏或其他后果概不负责.

* 请勿将 Actions_smzdm 项目的任何内容用于商业或非法目的，否则后果自负.

* 如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关脚本.

* 任何以任何方式查看此项目的人或直接或间接使用该 Actions_smzdm 项目的任何脚本的使用者都应仔细阅读此声明。jiegto 保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或 Actions_smzdm 项目的规则，则视为您已接受此免责声明.

 **您必须在下载后的24小时内从计算机或手机中完全删除以上内容.**  </br>
> ***您使用或者复制了本仓库且本人制作的任何脚本，则视为`已接受`此声明，请仔细阅读*** 

## 使用方式

**不再推荐使用 Fork 的方式同步代码**

**[建议使用 reposync 的方式进行同步代码，详细教程请点此查看](https://github.com/sazs34/MyActions/blob/master/backup/reposync.md)**

1. 使用 reposync 的方式进行同步代码

2. 点击 Settings -> Secrets -> 点击绿色按钮 (如无绿色按钮说明已激活。直接到第三步。)

3. 新增 new secret 并设置 Secrets:

4. 双击右上角自己仓库Star触发

5. [定时执行](##定时执行)

## 定时执行

1. 支持手动执行，具体在 Actions 中选中要执行的 Workflows 后再在右侧可以看到 Run workflow，点击即可运行 此workflow。

2. 如果嫌上一步麻烦的，也可以直接点击一下star，你会发现所有的workflow都已执行。

3. 如需修改执行时间自行修改`.github\workflows\`下面的yaml内的` cron:` 执行时间为国际标准时间 [时间转换](http://www.timebie.com/cn/universalbeijing.php) 分钟在前，小时在后，尽量提前半小时，因为触发和下载需要一定时间。

## Secrets 集合

### 什么值得买专用

| 名称     | 内容           |   说明  |
| -------- | ------------- |   ----- |
| `SMZDM_COOKIE`          |   什么值得买 cookie    |什么值得买 cookie，详细请往下看|
| `SMZDM_USER`            |   什么值得买账号        |什么值得买账号|
| `SMZDM_PASS`          |   什么值得买密码        |什么值得买密码|

### 推送专用

| 名称     | 内容           |   说明  |
| -------- | ------------- |   ----- |
| `PUSH_KEY`              |   Server酱SCKEY值      | cookie失效推送[server酱的微信通知](http://sc.ftqq.com/3.version) |
| `BARK_PUSH`             |   Bark推送值           | 此内容支持自建Bark添加整个链接即可(自建链接切记删除最后一个/  比如你的是https://a.a.com/ 只需要填写https://a.a.com 即可)|
| `BARK_SOUND`            |   BARK app推送铃声     |BARK app推送铃声,铃声列表去APP查看复制填写|
| `TG_BOT_TOKEN`          |   telegram推送        | tg推送,填写自己申请[@BotFather](https://t.me/BotFather)的Token,如`10xxx4:AAFcqxxxxgER5uw` , [具体教程](https://github.com/lxk0301/scripts/pull/37#issuecomment-692415594) |
| `TG_USER_ID`            |   telegram推送        | tg推送,填写[@getuseridbot](https://t.me/getuseridbot)中获取到的纯数字ID, [具体教程](https://github.com/lxk0301/scripts/pull/37#issuecomment-692415594) |
| `SEND_KEY`              |     推送开关           |如果你想只在COOKIE失效时发送推送信息,就加一个这个,参数值随便写就行|

### 什么值得买 Cookie 获取

1. 电脑浏览器访问 https://zhiyou.smzdm.com/user/ 进行登录，如果登录后，不是该页面，则重新在浏览器中访问一次 https://zhiyou.smzdm.com/user/ 即可。

2. 打开开发者工具,在 Network 选项卡，刷新页面 ,然后选中 user ，在右侧的 Headers 标签里，将 Cookie 字段从 sess= 开始到结束，复制出来。

![](https://github.com/jiegto/Actions_smzdm/blob/main/backup/SMZDM_Cookie.jpg?raw=true)

## 签到脚本说明

1. 什么值得买的会员体系更新后，连续签到30天加30经验值的福利已经没有，每日签到只能获得2点经验值。以现在的会员升级体系，从V5升级到V6，需要1万的经验值，依靠签到需要连续签到13年半。

2. 所以在原来签到的基础上，增加了每日完成一些任务的功能，这样每日基本上可以获得120左右的经验值。V5升级到V6，只需要84天。

3. 什么值得买执行任务时，对每次任务的时间间隔有一定的要求，过短的时间间隔可能会没有任何奖励。如果在短时间内并行发起大量请求的话，严重的情况会导致账号异常，需要修改密码。所以在每次执行任务时，都加入了3秒的休眠时间，这会导致脚本的执行时间需要非常长，差不多1分钟左右。请把脚本超时时间设置到最长，建议2分钟以上，以免因为超时被强制中断。

4. 什么值得买Web端和App端每日自动签到脚本，并且完成每日点击去购买10次、点值5次、点赞5次、收藏5次的任务。

更多信息请参考[这里](https://github.com/blackmatrix7/ios_rule_script/blob/master/script/smzdm/README.md)

## 鸣谢

[@blackmatrix7](https://github.com/blackmatrix7/ios_rule_script/tree/master/script/smzdm) - 什么值得买签到脚本

[@BlueskyClouds](https://github.com/BlueskyClouds/My-Actions)  - Actions 实现签到和推送

[@sazs34](https://github.com/sazs34)  - reposync 同步相关

