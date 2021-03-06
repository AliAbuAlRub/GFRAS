import { QuizIcon } from '../../components/icons/Quiz';
import React from 'react';
import { AttendanceIcon } from '../../components/icons/Attendance';
import { AddStudents } from '../../components/icons/AddStudents';
import { QuizDetailsIcon } from '../../components/icons/QuizDetails';

export const sideMenuItems = [
	{
		title: 'Your Courses'
	},
	{ title: 'Create New Course' }
];

export const courseDetails = [
	{
		label: 'Create Quiz',
		id: 'create-quiz',
		icon: <QuizIcon boxSize='40px' />,
		canSideMenuExpand: true
	},
	{
		label: 'Quizzes Details',
		id: 'quizzes-details',
		icon: <QuizDetailsIcon boxSize='35px' />,
		canSideMenuExpand: true
	},
	{
		label: 'Attendance',
		id: 'attendance-list',
		icon: <AttendanceIcon boxSize='35px' />,
		canSideMenuExpand: false
	},
	{
		label: 'Add Students',
		id: 'add-new-students',
		icon: <AddStudents boxSize='35px' />,
		canSideMenuExpand: false
	}
];

export const YOUR_COURSES = 'Your Courses';
export const CREATE_NEW_COURSE = 'Create New Course';
