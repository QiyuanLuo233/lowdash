const fs = require('fs').promises;
const path = require('path');

async function generateIndexTs(dir = './src') {
    // 读取目录
    const files = await fs.readdir(dir, { withFileTypes: true });

    // 过滤出.ts文件
    const tsFiles = files.filter(file => file.isFile() && file.name.endsWith('.ts'));

    // 生成代码
    let code = '';
    for (const file of tsFiles) {
        const fileName = file.name.replace('.ts', ''); // 去掉.ts后缀
        code += `export { default as ${fileName} } from './src/${fileName}';\n`;
    }

    // 写入index.ts文件
    await fs.writeFile(path.join('', 'index.ts'), code);

    console.log('index1.ts文件已生成！');
}

generateIndexTs();