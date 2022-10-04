import { combineClass } from '../../../Tools/index'
import styles from './index.less'
import { useLocation, history } from 'umi';


const list = [
  {
    label: 'React',
    router: '/react'
  },
  {
    label: 'Mobx',
    router: '/mobx'
  },
  {
    label: 'Webpack',
    router: '/webpack'
  },
  {
    label: 'Node',
    router: '/node'
  },
  {
    label: '工程化',
    router: '/engineering'
  },

]

const Nav = () => {
  const { pathname } = useLocation()

  const linkTo = (router: string) => {
    history.push(router)
  }

  return <div className={`flex ${styles.nav}`}>
    {
      list.map(item => <div onClick={() => linkTo(item.router)} className={combineClass(pathname.startsWith(item.router), styles['nav-item-active'], styles['nav-item'], 'cursor-pointer')} key={item.label}>{ item.label }</div>)
    }
  </div>
}

export default Nav