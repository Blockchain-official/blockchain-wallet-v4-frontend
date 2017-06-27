import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { selectors } from 'data'

import Header from './Header'
import MenuLeft from './MenuLeft'
import MenuTop from './MenuTop'

const WalletLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
    // rest.isAuthenticated
    // ? (
      <div className='container-fluid no-padding h-100'>
        <div className='row no-gutters fixed-top'>
          <div className='col'>
            <Header />
          </div>
        </div>
        <div className='row no-gutters h-100 padding-top-55'>
          <div className='col-xl-2 border-right hidden-lg-down'>
            <MenuLeft location={rest.location} />
          </div>
          <div className='col-12 col-xl-10'>
            <div className='row no-gutters border-bottom'>
              <div className='col-12'>
                <MenuTop />
              </div>
            </div>
            <div className='row no-gutters'>
              <div className='col-12'>
                <Component {...matchProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
      // )
      // : (
      //   <Redirect to={{ pathname: '/login', state: { from: matchProps.location } }} />
      // )
    )} />
  )
}

function mapStateToProps (state) {
  return {
    isAuthenticated: selectors.auth.getIsAuthenticated
  }
}

export default connect(mapStateToProps)(WalletLayout)
