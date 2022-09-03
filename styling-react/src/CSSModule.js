import classNames from 'classnames/bind'
import styles from './CSSModule.module.scss'

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <div className={cx('wrapper', 'inverted')}>
      Hi, I am <span className="something">CSS Module!</span>
    </div>
  );
}
  export default CSSModule;