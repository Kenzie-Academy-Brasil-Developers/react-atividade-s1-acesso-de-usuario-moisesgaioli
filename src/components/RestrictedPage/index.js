
import "./styles.css"

function RestrictedPage ({ isLoggedIn, user, login, logout }) {

    return (

        <div>
            
            {isLoggedIn ? 
                <div>
                    <p> Bem-vindo {user} </p>
                    <button className="button logout" onClick={logout}> Logout </button>
                </div>

                :

                <div>
                    <p> Você não pode acessar essa página </p>
                    <button className="button login" onClick={login} > Login </button>
                </div>
            }

        </div>
    )
}

export default RestrictedPage;