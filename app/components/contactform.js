import { Container, Row, Col } from "react-bootstrap"

export default function Page() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
  };
   
    return (
      <Container>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" className="form-control" placeholder="Name" />
            <br />
            <input type="email" name="email" className="form-control" placeholder="Email" />
            <br />
            <input type="text" name="mobile" className="form-control" placeholder="Mobile no" />
            <br />
            <textarea rows={4} cols={10} name="msg" className="form-control"></textarea>
            <br />
            <input type="submit" name="submit" value={'Send'} className="btn btn-primary" />
            <br />
            <hr style={{marginBottom:'100px'}} />
        </form>
      </Container>
    );
  }