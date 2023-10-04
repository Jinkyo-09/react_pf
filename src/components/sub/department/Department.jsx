import Layout from '../../common/layout/Layout';
import styles from './Department.module.scss';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useState } from 'react';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);
	useEffect(() => {
		//해당 useEffect구문은 컴포넌트 마운트시 한번만 동작됨
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				console.log(json);
				setDepartment(json.members);
			});
	}, []);

	return (
		<Layout title={'Department'} styleName={styles.department}>
			{Department.map((member, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`${path}/img/${member.pic}`} alt={member.name} />
						</div>
						<h2>{member.name}</h2>
						<p>{member.position}</p>
					</article>
				);
			})}
		</Layout>
	);
}

/*
	1. 외부데이터를 fetch를 통해서 가져오는 법 
	2. useEffect를 이용해서 컴포넌트 마운트시 한번만 외부데이터 fetching
	3. 받아온 외부데이터는 useState를 통해서 state에 담아주고, state변경에 따라 화면 렌더링
	4. state에 담겨있는 데이터로 map으로 반복돌면서 동적으로 돔생성 (JSX)
*/
