var DateTimeInputInstance = (
  <div>
    <DateTimeInput format="YYYY-MM" minViewMode="months" showTimePicker={false} viewMode="months" />
    <DateTimeInput format="YYYY" minViewMode="years" showTimePicker={false} viewMode="years" />
  </div>
);

ReactDOM.render(DateTimeInputInstance, mountNode);
