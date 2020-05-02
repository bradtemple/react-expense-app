const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}

const { name = 'Anonymous', age } = person

console.log(`${name} is ${age}.`)

const { city, temp: temperature } = person.location
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`)
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'self-published' } = book.publisher 
console.log(publisherName)

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']

const [street, city2, state = 'New York', zip] = address

console.log(`You are in ${city2}, ${state}.`)

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75']

const [coffee, , med] = item

console.log(`A ${coffee} costs ${med}.`)