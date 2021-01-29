import '../App.css';
import Lesson from './Lesson'

function Course() {
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };
    const formatName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">ReactJS</h3>
                </div>
                <div className="panel-body">
                        {formatName(user)}
                    <ul className="list-group">
                  
                        <Lesson />
                    </ul>
                </div>
            </div>
        </div>


    );
    
}

export default Course;

