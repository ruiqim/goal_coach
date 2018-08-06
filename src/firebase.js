import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkhU6-GEzD50fZtpclpVrF9CBp6RtMwcM",
    authDomain: "goalcoach-1ffd8.firebaseapp.com",
    databaseURL: "https://goalcoach-1ffd8.firebaseio.com",
    projectId: "goalcoach-1ffd8",
    storageBucket: "",
    messagingSenderId: "749530201857"
};


export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')
