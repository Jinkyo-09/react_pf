import Layout from '../../common/layout/Layout';
import styles from './Members.module.scss';
//import clsx from 'clsx';

export default function Members() {
	return (
		<Layout title={'Members'} styleName={styles.members}>
			<p>회원가입 페이지입니다.</p>
		</Layout>
	);
}
