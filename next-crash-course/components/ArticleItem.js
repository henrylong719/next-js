import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`article/${article.id}`}>
      <a className={articleStyles.card} key={article.id}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
