console.log('App is Running');

// Only render the subtitle(and p tag) if subtitile exists - logical and operator
// render new p tag -  if options.length > 0 "Here are your options""No Options"

const appObject = {
  title: 'Indecision App',
  subtitle: 'Indecision Subtitle',
  options: ['One', 'Two']
};

// JSX - Javascript XML
const template = (
  <div>
    <h1>{appObject.title}</h1>

    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>
      {appObject.options.length > 0 ? 'Here are your options' : 'No Options'}{' '}
    </p>

    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: 'Gilwell Muhati',
  age: 30,
  location: 'New York'
};

function getLocation(location) {
  if (location) {
    return <p>Location: {user.location}</p>;
  }
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age && user.age >= 18 && (
      <p>
        Age: <b>{user.age} </b>
      </p>
    )}

    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
