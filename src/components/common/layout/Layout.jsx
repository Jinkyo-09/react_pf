import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';

export default function Layout({ title, children, styleName }) {
	useEffect(() => {
		//컴포넌트 마운트시 한번만 호출

		return () => {
			//컴포넌트가 언마운트시 한번만 호출
		};
	}, []);
	return (
		<section className={clsx(styles.layout, styleName)}>
			<figure></figure>

			<div className={clsx(styles.content, styleName)}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
