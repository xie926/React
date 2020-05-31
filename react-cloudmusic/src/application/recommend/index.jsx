import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import Scroll from '../../components/scroll/index'
import * as actionTypes from './store/actionCreator'
import Slider from './Slider'

function Recommend(props) {
  const { bannerList, recommendList } = props
  const bannerListJS = bannerList ? bannerList.toJS() : []
  useEffect(() => {  //此处模拟unMount生命周期
    // 如果未设置执行条件，在didMount didUpdate 都会执行
    if (!bannerList.size) {
      // 如果没有则发起请求
      props.getBannerDataDispatch()
    }
    if (!bannerList.size) {
      props.getRecommendListDataDispatch()
    }
    return () => {
      // unMount
    }
  }, [])  // 第二参数：执行条件，前后两次数组中的值是否一致，不一样则执行
  return (
    <Scroll>
      <div>
        {/* 轮播 */}
        <Slider bannerList={bannerListJS}/>
      </div>
    </Scroll>
  )
}

// 从store中的recommend模块取值
const mapStateToProps = (state) => ({
  bannerList: state.getIn(['recommend', 'bannerList']),
  recommendList: state.getIn(['recommend', 'recommendList']),
  // songsCount: state.getIn(['player', 'playList']).size,
  enterLoading: state.getIn(['recommend', 'enterLoading'])
});

// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    getBannerDataDispatch() {
      dispatch(actionTypes.getBannerList());
    },
    getRecommendListDataDispatch() {
      dispatch(actionTypes.getRecommendList());
    },
  }
};

// React.memo 浅比较前后两次的props，再接收mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Recommend))
// export default Recommend