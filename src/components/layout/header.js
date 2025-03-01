import React from 'react';
import { MobileView, DesktopView } from '../responsive'
import { HeaderButton, HeaderButtonScrolled, HeaderHrefButton} from '../common/header-button'
import {
        HeaderWrapper,
        LineOfBurger,
        CloseIcon,
        MenuToggle,
        defaultSmooth,
        defaultDuration,
        desktopOffset,
        mobileOffset
} from '../common/header-styles';
import HeaderPlain from '../common/header-plain';

const inputBox = React.createRef()
const handleMenuClick = () => {
  inputBox.current.checked = false
}

const Header = () => {
  return (
	<HeaderWrapper>
		<HeaderPlain>
			<DesktopView>
				<ul>
					<HeaderButtonScrolled 
							to="about" 
							text="ABOUT"
							activeClass="active"
							smooth={defaultSmooth}
							duration={defaultDuration}
							offset={desktopOffset}
							style={{
								white: true,
								outline: true,
								text: true
							}}

							/>
					<HeaderButtonScrolled 
							to="clients" 
							text="CLIENTS"
							activeClass="active"
							smooth={defaultSmooth}
							duration={defaultDuration}
							offset={desktopOffset}
							style={{
								white: true,
								outline: true,
								text: true
							}}
							/>
					<HeaderHrefButton
							text="GITHUB"
							href="https://github.com/limebrains/"
							style = {{
								white: true,
								outline:true,
								text:true
							}}
							/>
					<HeaderButton
							to="/blog"
							text="BLOG"
							style={{
								white: true,
								outline: true,
								text: true
							}}
							/>
					<HeaderButtonScrolled 
							to="team" 
							text="TEAM"
							activeClass="active"
							smooth={defaultSmooth}
							duration={defaultDuration}
							offset={desktopOffset}
							style={{
								white: true,
								outline: true,
								text: true
							}}
							/>
					<HeaderButtonScrolled 
							to="contact" 
							text="CONTACT"
							activeClass="active"
							smooth={defaultSmooth}
							duration={defaultDuration}
							offset={desktopOffset}
							style={{
								white: true,
								outline: true,
								text: false
							}}
							/>
				</ul>
			</DesktopView>

			<MobileView>
				<nav role="navigation">
					<MenuToggle>
						<CloseIcon type="checkbox" innerRef={inputBox} />
						<LineOfBurger />
						<LineOfBurger />
						<LineOfBurger />
						<ul id="menu">
							<div>
								<HeaderButtonScrolled 
										to="about" 
										text="ABOUT"
										activeClass="active"
										smooth={defaultSmooth}
										duration={defaultDuration}
										offset={mobileOffset}
										onClick={handleMenuClick}
										style={{
											white: true,
											outline: true,
											text: true
										}}
										/>
								<HeaderButtonScrolled 
										to="clients" 
										text="CLIENTS"
										activeClass="active"
										smooth={defaultSmooth}
										duration={defaultDuration}
										offset={mobileOffset}
										onClick={handleMenuClick}
										style={{
											white: true,
											outline: true,
											text: true
										}}
										/>
								<HeaderHrefButton
										text="GITHUB"
										href="https://github.com/limebrains/"
										style={{
											white: true,
											outline: true,
											text: true
										}}
										/>
								<HeaderButton
										to="/blog"
										text="BLOG"
										style={{
											white: true,
											outline: true,
											text: true
										}}
										/>
								<HeaderButtonScrolled 
										to="team" 
										text="TEAM"
										activeClass="active"
										smooth={defaultSmooth}
										duration={defaultDuration}
										offset={mobileOffset}
										onClick={handleMenuClick}
										style={{
											white: true,
											outline: true,
											text: true
										}}
										/>
								<HeaderButtonScrolled 
										to="contact" 
										text="CONTACT"
										activeClass="active"
										smooth={defaultSmooth}
										duration={defaultDuration}
										offset={mobileOffset}
										onClick={handleMenuClick}
										style={{
											white: true,
											outline: true,
											text: false
										}}
										/>
							</div>
						</ul>
					</MenuToggle>
				</nav>
			</MobileView>
		</HeaderPlain>
	</HeaderWrapper>
  )
}

export default Header
