import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { Image } from 'react-bootstrap'
import LinktoGithub from './LinktoGithub.jpg'

function GitHubCard() {
    return(
        <div>
            <Card style={{ width: '100%' }}>
                <Image variant="top" src={LinktoGithub} className="text-center" alt="link-to-github" />
                <Card.Body>
                    <Card.Title>Veny's Github account</Card.Title>
                        <Card.Text>
                            Some quick example showing a Card element using react bootstrap.
                            Link to Github is below
                        </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>This Card will link to my Github account</ListGroup.Item>
                    <ListGroup.Item>The Link below will direct you to my Github</ListGroup.Item>
                    <ListGroup.Item>Thanks for visiting!</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="https://github.com/cordovav">Link to GitHub</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default GitHubCard