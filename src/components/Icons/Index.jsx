import Heart from './heart';
import Branch from './branch';
import Book from './book';
import Cancel from './cancel';
import Check from './check';
import Github from './github';
import Home from './home';
import Link from './link';
import Location from './location';
import Search from './search';
import Star from './star';
import Twitter from './twitter';
import User from './user';

function Index({name, ...props}) {

    const icons = {
        heart: Heart,
        branch: Branch,
        book: Book,
        cancel: Cancel,
        check: Check,
        github: Github,
        home: Home,
        link: Link,
        location: Location,
        search: Search,
        star: Star,
        twitter: Twitter,
        user: User,
    };

    const IconComponent = icons[name];
    return IconComponent ? <IconComponent {...props} /> : null; 

}

Index.defaultProps = {
  size: 16,
  color: 'white',
}

export default Index