/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1,
    name: 'Jack',
    phone: 88885555,
    email: 'jack@example.com',
    address: '123 Main St',
    bookingTime: new Date(),
  },
  {
    id: 2,
    name: 'Rose',
    phone: 88884444,
    email: 'rose@example.com',
    address: '124 Main St',
    bookingTime: new Date(),
  },
  {
    id: 3,
    name: 'Lily',
    phone: 88883333,
    email: 'lily@example.com',
    address: '125 Main St',
    bookingTime: new Date(),
  },
  {
    id: 4,
    name: 'Tom',
    phone: 88882222,
    email: 'tom@example.com',
    address: '126 Main St',
    bookingTime: new Date(),
  },
  {
    id: 5,
    name: 'Anna',
    phone: 88881111,
    email: 'anna@example.com',
    address: '127 Main St',
    bookingTime: new Date(),
  },
  {
    id: 6,
    name: 'Mike',
    phone: 88880000,
    email: 'mike@example.com',
    address: '128 Main St',
    bookingTime: new Date(),
  },
  {
    id: 7,
    name: 'Sara',
    phone: 88887777,
    email: 'sara@example.com',
    address: '129 Main St',
    bookingTime: new Date(),
  },
  {
    id: 8,
    name: 'David',
    phone: 88886666,
    email: 'david@example.com',
    address: '130 Main St',
    bookingTime: new Date(),
  },
  {
    id: 9,
    name: 'Emma',
    phone: 88885555,
    email: 'emma@example.com',
    address: '131 Main St',
    bookingTime: new Date(),
  },
  {
    id: 10,
    name: 'Chris',
    phone: 88884444,
    email: 'chris@example.com',
    address: '132 Main St',
    bookingTime: new Date(),
  },
];

function TravellerRow({traveller}) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
      <td>{traveller.id}</td>
      <td>{traveller.name}</td>
      <td>{traveller.phone}</td>
      <td>{traveller.email}</td>
      <td>{traveller.address}</td>
      <td>
      {traveller.bookingTime.toLocaleDateString('zh-CN')} {' '}
      {traveller.bookingTime.toLocaleTimeString('zh-CN', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
      })}
    </td>
    </tr>
  );
}

function Display({travellers}) {
  
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/

  return (
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Address</th>
          <th>Booking Time</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        {travellers.map(traveller => (
          <TravellerRow key={traveller.id} traveller={traveller} />
        ))}
      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', phone: '', email: '', address: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const { name, phone, email, address } = this.state;
    
    // 简单的验证
    if (!name || !phone || !email || !address) {
      alert("请填写所有字段！");
      return;
    }
    
    const newTraveller = {
      name,
      phone: parseInt(phone, 10),
      email,
      address
    };
    
    this.props.bookTraveller(newTraveller);
    
    this.setState({
      name: '',
      phone: '',
      email: '',
      address: ''
    });
  }

  render() {
    return (
        <form name="addTraveller" onSubmit={this.handleSubmit}>
          <h2>Add Traveller</h2>
          <div>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={this.state.name}
                onChange={this.handleChange}
                required 
              />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input 
                type="text" 
                name="phone" 
                placeholder="Phone" 
                value={this.state.phone}
                onChange={this.handleChange}
                required 
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={this.handleChange}
                required 
              />
            </label>
          </div>
          <div>
            <label>
              Address:
              <input 
                type="text" 
                name="address" 
                placeholder="Address" 
                value={this.state.address}
                onChange={this.handleChange}
                required 
              />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	<input type="text" name="travellername" placeholder="Name" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor() {
	super();
	}
	render(){
    const totalSeats = 50;
    const freeSeats = totalSeats - this.props.travellers.length;
	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
    <h2>Free Seats: {freeSeats}</h2>
	</div>);
	}
}
class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      console.log("Initial Travellers:", initialTravellers); // 调试输出
      this.setState({ travellers: initialTravellers });
    }, 500);
  }
  selectComponent(component) {
    this.setState({ selectedComponent: component });
  }
  bookTraveller(passenger) {
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
      this.setState(prevState => {
        // 生成新的唯一ID
        const newId = prevState.travellers.length > 0 
          ? Math.max(...prevState.travellers.map(t => t.id)) + 1 
          : 1;
        
        // 设置预订时间为当前时间
        const travellerWithId = { 
          ...passenger, 
          id: newId, 
          bookingTime: new Date() 
        };
        return { travellers: [...prevState.travellers, travellerWithId] };
      });
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/

  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
        <div>
          <button onClick={() => this.selectComponent('home')}>Home</button>
          <button onClick={() => this.selectComponent('display')}>Display Travellers</button>
          <button onClick={() => this.selectComponent('add')}>Add Traveller</button>
          <button onClick={() => this.selectComponent('delete')}>Delete Traveller</button>
        </div>
        <div>
          {this.state.selectedComponent === 'home' && <Homepage travellers={this.state.travellers} />}
          {this.state.selectedComponent === 'display' && <Display travellers={this.state.travellers} />}
          {this.state.selectedComponent === 'add' &&  <Add bookTraveller={this.bookTraveller} />}
          {this.state.selectedComponent === 'delete' && <Delete />}
        </div>
      </div>
    );
  }
}

// const element = <TicketToRide />;

export default TicketToRide;