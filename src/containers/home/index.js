import React, { useState } from 'react'
import {
	InputGroup,
	FormControl,
	Button,
	ListGroup,
	Alert,
} from 'react-bootstrap'
import words from '../../reducers/words'

export default function Home(props) {
	const { list, setWords } = props

	let wordRef = React.createRef()
	let headerRef = React.createRef()

	const [show, setShow] = useState(false)
	const [word, setWord] = useState('')

	let checkWord = () => {
		if (words.hasOwnProperty(wordRef.current.value)) {
			setShow(false)
			setWords(wordRef.current.value)
		} else {
			setShow(true)
		}
	}

	return (
		<div className="container mt-3">
			<div className="row mt-3">
				<div className="col-sm-6 mx-auto">
					<div className="col-sm-4 mx-auto mt-5 text-center">
						<h2>{word}</h2>
					</div>
					<InputGroup className="mb-3" size="lg">
						<FormControl
							placeholder="Задайте слово"
							aria-label="Word"
							ref={headerRef}
						/>
						<InputGroup.Append>
							<Button
								variant="dark"
								onClick={() =>
									setWord(
										headerRef.current.value.toUpperCase()
									)
								}
							>
								Задать
							</Button>
						</InputGroup.Append>
					</InputGroup>
					<InputGroup className="mb-3" size="lg">
						<FormControl
							placeholder="Введите слово"
							aria-label="Word"
							ref={wordRef}
						/>
						<InputGroup.Append>
							<Button variant="dark" onClick={() => checkWord()}>
								Проверить
							</Button>
						</InputGroup.Append>
					</InputGroup>
					{show ? (
						<Alert
							variant="danger"
							onClose={() => setShow(false)}
							dismissible
						>
							<Alert.Heading>Не не не, это ошибка!</Alert.Heading>
							<p>Такого слова в словаре не существует</p>
						</Alert>
					) : (
						' '
					)}
				</div>
			</div>
			<ListGroup className="col-sm-4 mx-auto mt-3">
				{list.list.length > 0
					? list.list.map((word, id) => {
							return (
								<ListGroup.Item
									variant="success"
									key={id}
									onClick={(e) => console.log(e.target.className = "list-group-item list-group-item-dark")}
								>
									{word}
								</ListGroup.Item>
							)
					  })
					: ' '}
			</ListGroup>
			<div className="col-sm-4 mx-auto text-center mt-3">
				<Button variant="danger">Finish</Button>
			</div>
		</div>
	)
}
