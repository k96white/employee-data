
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="p-32 rounded-lg shadow-md max-w-2xl w-full bg-gray-200">
            <h1 className="text-3xl font-bold mb-4 text-center text-black">About EmployeeData</h1>
            <br /><br />
            <p className="text-gray-700 mb-4">
            EmployeeData is a comprehensive employee management system designed to streamline HR processes and enhance organizational efficiency. Our platform provides a user-friendly interface for managing employee data, tracking performance, and facilitating communication within teams.
            </p>
            <p className="text-gray-700 mb-4">
            With features like data visualization, performance tracking, and customizable reports, EmployeeData empowers organizations to make informed decisions and foster a productive work environment.
            </p>
            <p className="text-gray-700">
            For more information, visit our website or contact our support team.
            </p>
        </div>
    </div>
  )
}

export default About