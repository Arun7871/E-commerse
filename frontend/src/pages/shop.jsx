import React from 'react'
import {Hero} from '../components/Hero/hero'
import {Popular} from '../components/popular/popular'
import {Offers} from '../components/offers/offers'
import { NewCollections } from '../components/NewCollections/NewCollections'
import { Newsletter } from '../components/newsLetter/newsletter'
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular />
        <Offers/>
        <NewCollections/>
        <Newsletter/>
    </div>
  )
}
