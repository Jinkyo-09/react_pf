import styles from './Department.module.scss';
import clsx from 'clsx';

export default function Department() {
	return (
		<section className={clsx(styles.department)}>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1>Deparment</h1>
			</div>
		</section>
	);
}
