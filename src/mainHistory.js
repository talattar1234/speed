import { createBrowserHistory } from 'history';
const mainHistory = createBrowserHistory();

export const navigateTo = (path) => {
    mainHistory.push(path)
}

export default mainHistory;