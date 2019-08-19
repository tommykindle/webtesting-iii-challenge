import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'


describe('<Display />', () => {
  it('renders', () => {
    render(<Display />)
  })
  it('displays expected value', () => {
    render(<Display closed={true} locked={false} />)
  })
  it('red-led class is working', () => {
    render(<Display closed={true} locked={true} ClassName="red-led" />)
  })
  it('green-led class is working', () => {
    render(<Display open={true} locked={false} ClassName="green-led" />)
  })
})