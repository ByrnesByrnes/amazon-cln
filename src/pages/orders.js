import React, {useState, useEffect } from 'react';
import { Order } from '../components'
import { OrderContainer } from '../container/order'

import { db } from '../firebase/config'
import { StateContext } from '../context/state'


export default function Orders() {
  const [{user}] = StateContext()
  const [orders, setOrders] = useState([])
  
  orders.map(
    order => order.data.cart
    ).map(cart => cart.map(item => item)) 

  useEffect(() => {
    if(user) {
      db
        .collection('users').doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            data: doc.data()
          })))
        ))
    } else { 
      setOrders([])
    }
  }, [])

  return (
    <div style={{ background: "#fff" }}>

      <Order>
        <Order.Title>Your Orders</Order.Title>
          {orders.map((order, i) => (
            <OrderContainer  order={order} />
          ))}
      </Order>
    </div>
  )
}