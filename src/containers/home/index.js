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
	const [duplicate, setDuplicate] = useState(false)
	const [word, setWord] = useState('')
	const [counter, setCounter] = useState(0)
	const [check, setCheck] = useState("")
	const [space, setSpace] = useState("")

	let checkTittle = () => {
		setShow(false)
		if (words.hasOwnProperty(headerRef.current.value.toLowerCase())) {
			setCheck(headerRef.current.value.toLowerCase().split(""))
			setWord(headerRef.current.value.toUpperCase())
		} else {
			setShow(true)
		}
		headerRef.current.value = ""
	}

	let checkWord = () => {
		setDuplicate(false)
		setShow(false)
		setSpace(false)

		let wordNew = wordRef.current.value.toLowerCase()
		let letter = wordRef.current.value.toLowerCase().split("")

		for(let i = 0; i<letter.length; i++){
			if(check.indexOf(letter[i]) === -1){
				setSpace(true)
				return
			}
		}

		if (words.hasOwnProperty(wordNew)) {
			if (list.list.indexOf(wordNew) >= 0) {
				setDuplicate(true)
				wordRef.current.value = ''
			} else {
				setWords(wordNew)
				setCounter(counter + 1)
			}
			wordRef.current.value = ''
		} else {
			setShow(true)
		}
	}

	let disableList = (e) => {
		if (e.target.className === 'list-group-item list-group-item-dark') {
			e.target.className = 'list-group-item list-group-item-success'
			setCounter(counter + 1)
		} else {
			e.target.className = 'list-group-item list-group-item-dark'
			if (counter === 0) {
				return counter
			} else {
				setCounter(counter - 1)
			}
		}
	}

	return (
		<div className="container mt-3">
			<div className="row mt-3">
				<div className="col-sm-6 mx-auto">
					<div className="col-sm-4 mx-auto mt-5 text-center">
						<h2>{word}</h2>
					</div>
					{word === '' ? (
						<InputGroup className="mb-3" size="lg">
							<FormControl
								placeholder="Задайте слово"
								aria-label="Word"
								ref={headerRef}
							/>
							<InputGroup.Append>
								<Button
									variant="dark"
									onClick={() => checkTittle()}
								>
									Задать
								</Button>
							</InputGroup.Append>
						</InputGroup>
					) : (
						''
					)}
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
					{duplicate ? (
						<Alert
							variant="warning"
							onClose={() => setDuplicate(false)}
							dismissible
						>
							<Alert.Heading>Опаньки!</Alert.Heading>
							<p>Вы уже добавили это слово</p>
						</Alert>
					) : (
						' '
					)}
					{space ? (
						<Alert
							variant="warning"
							onClose={() => setSpace(false)}
							dismissible
						>
							<Alert.Heading>Ага уже!</Alert.Heading>
							<p>Какие-то буквы не входят в заданное слово</p>
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
									onClick={(e) => disableList(e)}
								>
									{word}
								</ListGroup.Item>
							)
					  })
					: ' '}
			</ListGroup>
			<div className="col-sm-4 mx-auto text-center mt-3">
				<Button variant="danger">{counter}</Button>
			</div>
		</div>
	)
}
