import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Post from '@/components/Post';
import CategoryList from '@/components/CategoryList';
import { getPosts } from '@/lib/posts';
import matter from 'gray-matter';

export default function CategoryBlogPage({ posts, categoryname, categories }) {
	return (
		<Layout>
			<div className="flex justify-center">
				<div className="w-3/4 mr-10">
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{posts.map((post, index) => <Post key={index} post={post} />)}
					</div>
				</div>
				<div className="w-1/4">
					<CategoryList categories={categories} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	console.log('1');
	const files = fs.readdirSync(path.join('posts'));

	const categories = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

		const { data: frontmatter } = matter(markdownWithMeta);

		return frontmatter.category.toLowerCase();
	});
	console.log('cate', categories);

	const paths = categories.map((category) => ({
		params: { category_name: category }
	}));
	console.log('paths', paths);

	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params: { category_name } }) {
	console.log('2');

	const posts = getPosts();
	const categories = posts.map((post) => post.frontmatter.category);
	console.log(categories);
	const uniqueCategories = [ ...new Set(categories) ];
	console.log(uniqueCategories);

	const categoryPosts = posts.filter((post) => post.frontmatter.category.toLowerCase() === category_name);

	return {
		props: {
			posts: categoryPosts,
			categoryname: category_name,
			categories: uniqueCategories
		}
	};
}
