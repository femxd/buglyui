var onSelect = function(date) {
  console.log(date);
};

var DateTimeInputInstance = (
  <div>
    <table>
      <tbody>
        <tr>
          <td><DateTimeInput onSelect={onSelect} /></td>
        </tr>
      </tbody>
    </table>
    <DateTimeInput dateTime="2015-05-20 12:12" />
  </div>
);

ReactDOM.render(DateTimeInputInstance, mountNode);
