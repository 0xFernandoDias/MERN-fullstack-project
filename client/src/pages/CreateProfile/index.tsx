import Head from 'next/head'
import React, { ReactElement } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from 'src/components/layout/Navbar'

import {
    Main,
    Container,
    Form,
    Lead,
    My2,
    FormSocialInput,
    Button
} from './styles'

import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// import { Button } from '@chakra-ui/react'

config.autoAddCss = false;
library.add(fas, fab);


export default function CreateProfile(): ReactElement {
    const socialInputI = {
        padding: "0.5rem",
        width: "4rem"
    }

    const twitter = {
        color: "#38a1f3",
        marginRight: "20px"
    }

    const facebook = {
        color: "#3b5998",
        marginRight: "20px"
    }

    const youtube = {
        color: "#c4302b",
        marginRight: "16px"
    }

    const linkedin = {
        color: "#0077b5",
        marginRight: "20px"
    }

    const instagram = {
        color: "#3f729b",
        marginRight: "20px"
    }

    return (
        /* I need to change the fields!!!!!!!!!!!!!!!!! */
        <>
            <Head>
                <title>Create Profile</title>
            </Head>
            <Main>
                <>
                    <Navbar />
                    <Container>
                        <h1>
                            Create Your Profile
                        </h1>

                        <Lead>
                            <FontAwesomeIcon icon={faUser} />
                            Let's get some information to make your
                            profile stand out
                        </Lead>

                        <small>* = required field</small>

                        <Form>
                            <Form>
                                <select name="status">
                                    <option value="0">* Select Professional Status</option>
                                    <option value="Developer">Developer</option>
                                    <option value="Junior Developer">Junior Developer</option>
                                    <option value="Senior Developer">Senior Developer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Student or Learning">Student or Learning</option>
                                    <option value="Instructor">Instructor or Teacher</option>
                                    <option value="Intern">Intern</option>
                                    <option value="Other">Other</option>
                                </select>
                                <small>
                                    Give us an idea of where you are at in your career
                                </small>
                            </Form>

                            <Form>
                                <input type="text" placeholder="Company" name="company" />
                                <small>
                                    Could be your own company or one you work for
                                </small>
                            </Form>

                            <Form>
                                <input type="text" placeholder="Website" name="website" />
                                <small>
                                    Could be your own or a company website
                                </small>
                            </Form>
                            <Form>
                                <input type="text" placeholder="Location" name="location" />
                                <small>
                                    City & state suggested (eg. Boston, MA)
                                </small>
                            </Form>
                            <Form>
                                <input type="text" placeholder="* Skills" name="skills" />
                                <small>
                                    Please use comma separated values (eg.
                                    HTML,CSS,JavaScript,PHP)
                                </small>
                            </Form>
                            <Form>
                                <input
                                    type="text"
                                    placeholder="Github Username"
                                    name="githubusername"
                                />
                                <small>
                                    If you want your latest repos and a Github link, include your
                                    username
                                </small>
                            </Form>
                            <Form>
                                <textarea placeholder="A short bio of yourself" name="bio"></textarea>
                                <small>Tell us a little about yourself</small>
                            </Form>

                            <My2>
                                <Button>
                                    Add Social Network Links
                                </Button>
                                <span>Optional</span>
                            </My2>

                            <FormSocialInput>
                                <FontAwesomeIcon size="2x" icon={['fab', 'twitter']} style={socialInputI && twitter} />
                                <input type="text" placeholder="Twitter URL" name="twitter" />
                            </FormSocialInput>

                            <FormSocialInput>
                                <FontAwesomeIcon size="2x" icon={['fab', 'facebook']} style={socialInputI && facebook} />
                                <input type="text" placeholder="Facebook URL" name="facebook" />
                            </FormSocialInput>

                            <FormSocialInput>
                                <FontAwesomeIcon size="2x" icon={['fab', 'youtube']} style={socialInputI && youtube} />
                                <input type="text" placeholder="YouTube URL" name="youtube" />
                            </FormSocialInput>

                            <FormSocialInput>
                                <FontAwesomeIcon size="2x" icon={['fab', 'linkedin']} style={socialInputI && linkedin} />
                                <input type="text" placeholder="Linkedin URL" name="linkedin" />
                            </FormSocialInput>

                            <FormSocialInput>
                                <FontAwesomeIcon size="2x" icon={['fab', 'instagram']} style={socialInputI && instagram} />
                                <input type="text" placeholder="Instagram URL" name="instagram" />
                            </FormSocialInput>

                            <Button type="submit" style={{ background: "white", margin: "1rem" }}>Submit</Button> {/*color*/}
                            <Button >Go Back</Button> {/*href="/Dashboard"*/}
                        </Form>
                    </Container>
                </>
            </Main>
        </>
    )
}