// version v0.0.2
// create by jiegto
// detail url: https://github.com/jiegto/Actions_smzdm

const exec = require('child_process').execSync
const fs = require('fs')
const download = require('download')

const $ = new Env('什么值得买签到');
const notify = $.isNode() ? require('../sendNotify') : '';
// 公共变量
const KEY = process.env.SMZDM_COOKIE
const USER = process.env.SMZDM_USER
const PASS = process.env.SMZDM_PASS

async function downFile () {
    const url1 = 'https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_checkin.js'
    const url2 = 'https://raw.githubusercontent.com/jiegto/Actions_smzdm/main/magic/magic.json'    
    await download(url1, './')
    await download(url2, './')
}

async function changeFiele () {
    let content = await fs.readFileSync('./magic.json', 'utf8')
    content = content.replace(/"smzdm_cookie": ""/, `"smzdm_cookie": "${KEY}"`)
    content = content.replace(/"smzdm_account": ""/, `"smzdm_account": "${USER}"`)
    content = content.replace(/"smzdm_password": ""/, `"smzdm_password": "${PASS}"`)
    await fs.writeFileSync( './magic.json', content, 'utf8')
}

async function deleteFile(path) {
    // 查看文件result.txt是  否存在,如果存在,先删除
    const fileExists = await fs.existsSync(path);
    // console.log('fileExists', fileExists);
    if (fileExists) {
        const unlinkRes = await fs.unlinkSync(path);
        // console.log('unlinkRes', unlinkRes)
    }
}

async function start() {
    if (!KEY) {
        console.log('请填写 key 后在继续')
        return
    }
    // 下载最新代码
    await downFile();
    console.log('下载代码完毕')
    // 替换变量
    await changeFiele();
    console.log('替换变量完毕')
    // 执行
    await exec("node smzdm_checkin.js >> result.txt");
    console.log('执行完毕')
    const path = "./result.txt";
    let content = "";
    let body = "";
    if (fs.existsSync(path)) {
        body = fs.readFileSync(path, "utf8");
        content = body.match(/title[\s\S]*options/);
    }
    
    console.log(content)

    //运行完成后，删除下载的文件
    console.log('运行完成后，删除下载的文件\n')
    await deleteFile(path);

}

start()

