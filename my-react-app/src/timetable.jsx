export default function TimeTable() {
    const timelogs = [
        { date: '2024-05-01', hours: 4, activity: 'Coding feature X' },
        { date: '2024-05-02', hours: 3, activity: 'Debugging' },
    // Add more time logs as needed
  ];

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Hours</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {timelogs.map((log, index) => (
                    <tr key={index}>
                        <td>{log.date}</td>
                        <td>{log.hours}</td>
                        <td>{log.activity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}