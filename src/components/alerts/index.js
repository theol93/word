import { Alert } from 'react-bootstrap'
import React from 'react'

export function Missing() {
	return (
		<Alert variant="danger">
			<Alert.Heading>Не не не, это ошибка!</Alert.Heading>
			<p>Такого слова в словаре не существует</p>
		</Alert>
	)
}

export function Duplicate() {
	return (
		<Alert variant="warning">
			<Alert.Heading>Опаньки!</Alert.Heading>
			<p>Вы уже добавили это слово</p>
		</Alert>
	)
}

export function Space() {
	return (
		<Alert variant="warning">
			<Alert.Heading>Ага уже!</Alert.Heading>
			<p>Какие-то буквы не входят в заданное слово</p>
		</Alert>
	)
}
