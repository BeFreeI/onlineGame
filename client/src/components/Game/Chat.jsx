export default ({ history }) => {
  return (<ul>
    { history.map((msg, index) => <li key={ index }> { msg } </li>) }
  </ul>);
}
