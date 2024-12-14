import * as fs from 'node:fs/promises';
import * as path from 'node:path';

/**
 * 获取指定目录下的所有指定后缀的文件信息
 * @param {string} extname 文件后缀名，如 .md
 * @param {string} dir 指定目录，默认为当前目录，其他目录须使用相对路径（相对项目根目录）
 * @returns {Promise<Array>} 文件信息数组，包含文件路径、文件名、文件大小等属性
 * @example const filesInfo = await getSpecificFilesInfo('.md');
 */
 export default async function getSpecificFilesInfo(extname, dir = process.cwd()) {
  dir !== process.cwd() ? dir = path.resolve(dir) : null;

  const curArgs = [...arguments];
  let initDir = '';
  if (curArgs.length >= 3) {
    initDir = curArgs[curArgs.length - 1];
  } else {
    initDir = dir;
  }
  
  let filesInfo = [];
  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      filesInfo = filesInfo.concat(await getSpecificFilesInfo(extname, filePath, initDir));
    } else if (stat.isFile() && path.extname(file) === extname) {
      filesInfo.push({
        name: file,
        absolutePath: filePath.replace(/\\/g, '/'),
        relativePath: filePath.replace(initDir, '').replace(/\\/g, '/'),
      });
    }
  }

  return filesInfo;
 }
