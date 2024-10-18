import './about.scss';
import nameImg from './images/name.png';
import photoImg from './images/pict.png';

const About = () => {
	return (
		<>
			<div className='about'>
				<h3 className='aboutMobileText'>Про мене</h3>
				<img src={photoImg} alt='photoo' className='aboutImg' />

				<div className='aboutContainer'>
					<img src={nameImg} alt='name' className='aboutNameImg' />

					<div className='aboutWho'>
						<h3 className='aboutName'>АННА КОСТРОМА</h3>

						<p className='aboutWhoText'>
							Засновниця кондитерської Grann Pastry
						</p>
					</div>

					<p className='aboutDescription'>
						Від хобі до власної справи.
						<br />
						<br />
						Я закінчила DGF International Culinary School в Києві, а згодом
						навчалася в одній з найвідоміших шкіл готельного сервісу і кулінарії
						в світі «Le Cordon Bleu» (Франція).Свою справу почала після того, як
						здобула досвід і працювала в одному з найбільших кондитерських цехів
						Грузії (1500 кв.м.).
						<br />
						<br />
						Наразі започаткувала особистий бренд і будую власний кондитерський
						цех.Моя робота мене надихає. Завдяки моїм солодощам, я можу дарувати
						щасливі моменти для вас!
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
