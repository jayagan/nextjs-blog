import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


const postsDir = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDir);

    const allPostsData = fileNames.map(fileName => {
     
        const fullPath = path.join(postsDir, fileName);
        const id = fileName.replace(/\.md$/, '');
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        console.log(fileName);

        return {
            id,
            ...matterResult.data
        };
    });

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDir);

    return fileNames.map(f => (
        {
            params: {
                id: f.replace(/\.md$/, '')
            }
        }
    ))
}


export async function getPostData(id) {

    const fullPath = path.join(postsDir, `${id}.md`);

    const fileContents = fs.readFileSync(fullPath);

    const matterResult = matter(fileContents);

    const contentHtml = (await remark().use(html).process(matterResult.content)).toString();


    return {
        id,
        contentHtml,
        ...matterResult.data
    };

}
