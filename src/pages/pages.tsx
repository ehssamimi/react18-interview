import {
    Link
} from "react-router-dom"
    ;const Pages = () => {
    return (
        <div className='flex justify-center w-screen '>
            <ul className='flex justify-center gap-2'>
                <li>
                    <Link to="/">Pages</Link>
                </li>
                <li>
                    <Link to="/todo">todo</Link>
                </li>
                <li>
                    <Link to="/cocktail">cocktail</Link>
                </li>
                <li>
                    <Link to="/sudoku">Sudoku</Link>
                </li>
                <li>
                    <Link to="/interview">Interview</Link>
                </li>
                <li>
                    <Link to="/react-form-hook">react-form-hook</Link>
                </li>
            </ul>
        </div>
    );
};

export default Pages;