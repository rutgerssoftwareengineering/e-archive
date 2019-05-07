import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import NavBar from '../student/containers/NavBar';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Cookies from 'universal-cookie';
const cookies = new Cookies({ data: [ {members: ['user'] } ]});
cookies.set('userId', {}, { path: '/' });
Enzyme.configure({ adapter: new Adapter() });

describe('NavBar component for student', () => {
    test('renders', () => {
        const wrapper = shallow(<NavBar />);
        expect(wrapper.exists()).toBe(true);
    });
    test('sidebar exists', () => {
            const navBar = shallow(<NavBar />);
            expect((navBar.find('NavLink')).exists()).toBeTruthy()
    });
    test('link to /home exists', () => {
            const navBar = shallow(<NavBar />);
            expect((navBar.find({to:'/home'}).exists())).toBeTruthy()
    });
    test('link to /forum exists', () => {
        const navBar = shallow(<NavBar />);
        expect((navBar.find({to:'/forum'}).exists())).toBeTruthy()
    });
    test('link to /quizzes exists', () => {
        const navBar = shallow(<NavBar />);
        expect((navBar.find({to:'/quizzes'}).exists())).toBeTruthy()
    });
    test('link to /grades exists', () => {
        const navBar = shallow(<NavBar />);
        expect((navBar.find({to:'/grades'}).exists())).toBeTruthy()
    });
});