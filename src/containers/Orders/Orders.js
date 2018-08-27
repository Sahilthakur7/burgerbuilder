import React , {Component} from 'react';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';

class Orders extends Component{

    state = {
        orders: [],
        loading: true
    }

    componentDidMount(){
        axios.get('/orders.json')
            .then(response => {
                let fetchedOrders = [];
                for(let key in response.data){
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }
                this.setState({
                    loading: false,
                    orders: fetchedOrders
                })
            }).catch(error => {
                this.setState({loading: false})
            })
    }

    render(){
        return(
            <div>
                {this.state.orders.map(order => (<Order 
                    ingredients={order.ingredients}
                    price={+order.price}
                    key={order.id}/ >))}
            </div>
        );
    }

}

export default Orders;
