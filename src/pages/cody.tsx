import { FunctionComponent, useEffect } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import {
    ContentSection,
    Heading,
    Layout,
    PlayButton,
    ExternalsAuth,
    EmailAuth,
    Badge,
    HubSpotForm,
    CodyFeatureCard,
} from '../components'
import { DemoVideo } from '../components/DemoVideo'
import { TwitterEmbed } from '../components/EmbedTweet'
import { useAuthModal } from '../context/AuthModalContext'
import { EventName, getEventLogger } from '../hooks/eventLogger'

import styles from '../styles/CustomHubspotForm.module.scss'

const codyFeatures1 = [
    {
        image: '/cody/features/ExplainCode.png',
        heading: 'Code explanation',
        description:
            'Cody can explain what code is doing—at a high level or in detail. Highlight any code block or an entire file and Cody will explain what’s happening in conversational language.',
    },
    {
        image: '/cody/features/CodeSmells.png',
        heading: 'Code smells',
        description:
            'Cody can act as a pair programmer and analyze code blocks for code smells, potential bugs, and unhandled errors. Cody will point out issues in selected code such as magic numbers, unhandled edge cases, or unclear variables names, with suggestions to fix those issues.',
    },
    {
        image: '/cody/features/SummarizeCode.png',
        heading: 'Summarize recent code changes',
        description:
            'Cody is able to reference recent diffs to tell you about recent changes to your code. Cody can generate summaries of changes to an entire repository over the last day or week or summarize the changes specific to a selected file.',
    },
    {
        image: '/cody/features/optimize.png',
        heading: 'Debugging assistance',
        description:
            'Cody can help you debug and improve your code. Pass in a code snippet to the Cody chat and request a specific fix—such as handing for a new edge case—and Cody will provide a rewritten code suggestion.',
    },
    {
        heading: 'Translate language',
        description:
            'Cody translates selected between programming languages. You can feed code snippets to Cody—for example, a certain function—and Cody can translate that code, providing you with a code snippet of another language with the same functionality.',
    },
    {
        heading: 'Code navigation',
        description:
            'Cody can help you find functions & components from around your codebase. Ask Cody where a certain component is defined—such as a webapp navbar, or an API schema—and Cody will point you to the file where it lives.',
    },
    {
        heading: 'Reference tracking',
        description:
            'Cody knows where all your functions are referenced throughout your code. Ask Cody to find where a specific function is referenced and it will give you the main files where it’s referenced.',
    },
]

const codyFeatures2 = [
    {
        image: '/cody/features/UnitTest.png',
        heading: 'Unit tests',
        description:
            'Cody writes unit tests for you, saving you time and letting you stay focused on building software. Highlight a code block and trigger the Generate a unit test recipe; Cody will write a unit test ready to be pasted into your code.',
    },
    {
        image: '/cody/features/CodeCompletions.png',
        heading: 'Code completions',
        description:
            'Cody can suggest code while you code. Start writing code and Cody will suggest the next few lines for you. Choose to accept it, or open the command palette and click Cody: View Suggestions to see various code snippets Cody suggests using.',
    },
    {
        heading: 'Inline code fixes',
        description:
            'Cody edits and improves code directly using inline instructions. Simply type what you want Cody to do above or below a block of Cody and hit the Fixup hotkey; Cody will directly edit that code within your editor, saving you the need to copy and paste code from the chat.',
    },
    {
        heading: 'Documentation generation',
        description:
            'Cody can read and understand your code, which means it can also write documentation for you. Highlight a snippet of code—for example, a function or class—and Cody can generate a docstring for it.',
    },
    {
        heading: 'Code generation',
        description:
            'Cody generates new code on request via the chat. You can ask Cody to write boilerplate code, API calls, or even specific code based on your instruction and requirements.',
    },
]

const CodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => {
        const eventArguments = {
            source: 'about-cody-deployment',
            description: 'Get started with cody for free button click',
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log(EventName.CODY_GET_STARTED_CTA, eventArguments, eventArguments)

        openModal('about-cody-deployment')
    }

    useEffect(() => {
        const eventArguments = {
            description: 'About - Cody page view',
            source: 'about-cody',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log(EventName.VIEW_ABOUT_CODY, eventArguments, eventArguments)
    }, [])

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://about.sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName="sg-bg-gradient-cody"
            displayChildrenUnderNav={true}
        >
            {/* Hero Section */}
            <ContentSection parentClassName="!py-0" className="pt-16 text-center md:pt-[10px]">
                <div className="mx-auto max-w-[637px]">
                    <div className="center flex items-center justify-center gap-x-4">
                        <img src="/cody/cody-logo.png" alt="Cody Logo" className="h-[21px] w-[23px]" />
                        <p className="mb-0 text-[28px] font-semibold text-white">Meet Cody,</p>
                    </div>
                    <Heading size="h1" className="mt-2 text-white md:!text-[69px] md:!leading-[81px]">
                        The AI that knows your{' '}
                        <span className="cody-heading bg-clip-text text-transparent"> entire codebase </span>
                    </Heading>
                    <Heading size="h4" className="mx-auto mt-6 max-w-[637px]  !font-normal text-gray-200">
                        Cody answers code questions and writes code for you by reading your entire codebase and the code
                        graph.
                    </Heading>
                    <p className="mt-8 text-[20px] font-semibold text-white">
                        Sign up to get free access <span className="text-white">👇</span>
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="about-cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="about-cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="about-cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 text-[14px] text-violet-300 opacity-70">
                        By registering, you agree to our{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms/privacy"
                        >
                            Private Policy
                        </Link>
                    </p>
                </div>
                <div className="mx-auto mt-12 w-full">
                    <DemoVideo
                        video="cody-demo-202305"
                        splash={true}
                        className="mx-auto mt-8 w-full max-w-[1062px] rounded-lg bg-violet-750 drop-shadow-2xl"
                        splashClassName="rounded-lg"
                        playButton={<PlayButton title="Watch Cody write & fix code" time="4 min" ctaText="Watch now" />}
                    />
                </div>

                <Heading size="h2" className="mx-auto mt-12 max-w-[540px] !text-[36px] text-white md:mt-[96px]">
                    We’re working to bring you Cody{' '}
                    <span className="cody-text-gradient bg-clip-text text-transparent"> where you need it most </span>
                </Heading>

                <div className="mt-16 flex flex-col gap-16 text-[24px] font-semibold text-white">
                    <div className="flex w-full flex-wrap justify-center gap-6 md:flex-nowrap">
                        <CodyFeatureCard
                            plainOnMobile={false}
                            className="justify-end md:pt-[180px]"
                            heading={
                                <>
                                    Cody app <Badge size="large" text="New!" color="light-gray" />
                                </>
                            }
                            description="The app is a free, native desktop client for Cody. The app builds your local code graph
                                and connects to your IDE extensions to make Cody more powerful and accurate."
                            descriptionClassName="!text-lg"
                        />

                        <div className="flex w-full max-w-[509px] flex-col gap-y-6">
                            <Heading
                                size="h4"
                                className="cody-platforms-bg-gradient flex w-full items-center justify-center gap-4 border border-white/[.04] py-4 px-6 text-white"
                            >
                                <img src="/icons/vscode.svg" height={34} width={38} alt="IntelliJ Icon" />
                                VS Code extension
                            </Heading>{' '}
                            <Heading
                                size="h4"
                                className="flex w-full items-center justify-center gap-4 border border-dashed border-white/[.15] py-4 px-6 text-white"
                            >
                                <img src="/icons/IntelliJ.svg" height={38} width={38} alt="IntelliJ Icon" />
                                IntelliJ
                                <Badge size="small" text="Coming soon!" color="light-gray" />
                            </Heading>
                            <Heading
                                size="h4"
                                className="flex w-full items-center justify-center gap-4 border border-dashed border-white/[.15] py-4 px-6 text-white"
                            >
                                <img src="/icons/Neovim-logo.svg" height={38} width={38} alt="Neovim Icon" />
                                Neovim
                                <Badge size="small" text="Coming soon!" color="light-gray" />
                            </Heading>
                            <Heading
                                size="h4"
                                className="flex w-full items-center justify-center gap-4 border border-dashed border-white/[.15] py-4 px-6 text-white"
                            >
                                <img src="/icons/EmacsIcon.svg" height={38} width={38} alt="Emacs Icon" />
                                Emacs
                                <Badge size="small" text="Coming soon!" color="light-gray" />
                            </Heading>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleOpenModal}
                        className="btn btn-default-outlined w-fit self-center"
                    >
                        Get started with Cody for free
                    </button>
                </div>
            </ContentSection>

            <ContentSection
                id="contact-form"
                parentClassName="!py-0 !pt-20 md:!pt-[120px]"
                className="cody-contact-form-wrapper rounded-lg"
            >
                <div className="flex flex-col gap-6 py-16 px-6 md:flex-row md:px-20 md:py-[96px] md:pr-[53px]">
                    <div className="max-w-[614px]">
                        <Heading size="h2" className="!text-[36px] text-white">
                            Get Cody{' '}
                            <span className="cody-text-gradient bg-clip-text text-transparent"> where you work </span>
                        </Heading>
                        <p className="mt-4 text-lg text-gray-200">
                            Cody for Enterprise provides context-aware answers based on your own private codebase.
                            Contact us through the form to learn more.
                        </p>
                    </div>
                    <div className={classNames('md:min-w-[400px] xl:min-w-[554px]', styles.codyForm)}>
                        <HubSpotForm
                            formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                            inlineMessage="Thank you! We'll get back to you soon"
                        />
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="!pb-0 !pt-16 md:!pt-[112px]"
                className="mx-auto flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-2 md:flex-row md:items-start"
            >
                <div className="border-t border-gray-500 pt-12 text-left">
                    <Heading size="h2" className="!text-[36px] text-white">
                        Codebase-aware intelligence
                    </Heading>
                    <p className="my-[30px] max-w-[572px] text-lg text-gray-200">
                        Answer questions about both general programming topics and your specific codebase from right
                        inside your editor. Cody knows about your local code and can learn from the code graph and
                        documentation inside your organization to do just that.
                    </p>
                    <Link
                        href="https://docs.sourcegraph.com/cody"
                        className="inline-flex items-center whitespace-nowrap font-semibold text-white"
                        title="See the Cody docs"
                    >
                        See the Cody docs <ChevronRightIcon className="ml-[3px]" />
                    </Link>
                </div>

                <div className="h-fit max-w-[625px] overflow-hidden rounded-lg bg-violet-750 drop-shadow-xl md:w-[50%] md:min-w-[450px]">
                    <video
                        className="sg-video-border-gradient w-full rounded-lg"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        controls={false}
                        data-cookieconsent="ignore"
                    >
                        <source
                            type="video/mp4"
                            src="https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-web-chat-may2023.mp4"
                            data-cookieconsent="ignore"
                        />
                    </video>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-0" className="mt-16 md:mt-[128px]">
                <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 md:gap-y-9">
                    {codyFeatures1.slice(0, 4).map(({ description, heading, image }) => (
                        <CodyFeatureCard
                            key={heading}
                            description={description}
                            subHeading={heading}
                            image={image}
                            className="!max-w-full"
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 justify-center gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-9">
                    {codyFeatures1.slice(4, 8).map(({ description, heading }) => (
                        <CodyFeatureCard key={heading} description={description} subHeading={heading} />
                    ))}
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="!py-0"
                className="mx-auto mt-16 flex flex-col items-center gap-y-8 gap-x-[83px] text-center md:!mt-[176px] md:!mb-[128px] md:flex-row md:items-start"
            >
                <div className="border-t border-gray-500 pt-12 text-left">
                    <Heading size="h2" className="!text-[36px] text-white">
                        AI-generated code
                    </Heading>
                    <p className="mt-[30px] max-w-[572px] text-lg text-gray-200">
                        Cody uses knowledge of your codebase to write and fix code. Generate everything from boilerplate
                        code to API resolvers that rely on the context and style of your codebase. You can even ask Cody
                        to fix code blocks for errors, readability, or unhandled edge cases, and Cody will make changes
                        directly in your working file.
                    </p>
                </div>

                <div className="h-fit max-w-[625px] overflow-hidden rounded-lg bg-violet-750 drop-shadow-xl md:w-[50%] md:min-w-[450px]">
                    <video
                        className="sg-video-border-gradient w-full rounded-lg"
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        controls={false}
                        data-cookieconsent="ignore"
                    >
                        <source
                            type="video/mp4"
                            src="https://storage.googleapis.com/sourcegraph-assets/website/Product%20Animations/cody-fixup-may2023.mp4"
                            data-cookieconsent="ignore"
                        />
                    </video>
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-0" className="mt-16">
                <div className="grid grid-cols-1 justify-between gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-2 md:gap-y-9">
                    {codyFeatures2.slice(0, 2).map(({ description, heading, image }) => (
                        <CodyFeatureCard
                            key={heading}
                            description={description}
                            subHeading={heading}
                            image={image}
                            descriptionClassName="text-sm"
                            className="!max-w-full"
                        />
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 justify-center gap-x-6 gap-y-6 sm:grid-cols-2 md:grid-cols-3 md:gap-y-9">
                    {codyFeatures2.slice(2, 5).map(({ description, heading }) => (
                        <CodyFeatureCard
                            key={heading}
                            description={description}
                            subHeading={heading}
                            descriptionClassName="text-sm"
                        />
                    ))}
                </div>
            </ContentSection>

            <ContentSection parentClassName="text-center !pb-0 !pt-[112px]">
                <Heading size="h2" className="text-white">
                    See what devs are building with Cody
                </Heading>

                <div className="mt-6 flex w-full flex-wrap justify-center gap-x-6 md:mt-16 md:grid-cols-2">
                    <TwitterEmbed tweetId="1645903813302185984" className="flex w-full max-w-[500px] justify-center" />
                    <div className="flex w-full max-w-[500px] flex-col gap-1">
                        <TwitterEmbed tweetId="1647765520673046529?s=20" className="flex justify-center" />
                        <TwitterEmbed tweetId="1645490165857542145" className="flex justify-center " />
                    </div>
                </div>
            </ContentSection>

            <ContentSection
                parentClassName="!py-0"
                className="mx-auto flex flex-col items-center justify-center gap-x-8 py-24  md:flex-row md:items-start md:pb-[112px] md:pt-[208px]"
            >
                <div className="max-w-[550px]">
                    <Heading size="h2" className="!text-4xl text-white">
                        Try Cody for free
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody is free for personal use in the Cody app and IDE extensions. Sign up to get access.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="github"
                            label="GitHub"
                            source="cody"
                        />
                        <ExternalsAuth
                            className="w-fit justify-center !font-normal"
                            authProvider="gitlab"
                            label="GitLab"
                            source="cody"
                        />
                        <EmailAuth
                            icon={true}
                            className="sg-email-auth-btn h-12 w-fit border bg-white bg-opacity-10 text-lg !font-normal text-white"
                            source="cody"
                            label="Email"
                        />
                    </div>
                    <p className="mt-4 mb-0 text-[14px] text-violet-300 opacity-70">
                        By registering, you agree to our{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms"
                        >
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                            className="text-violet-300 underline"
                            target="_blank"
                            href="https://about.sourcegraph.com/terms/privacy"
                        >
                            Private Policy
                        </Link>
                    </p>
                </div>
                <div
                    id="cody-for-work"
                    className="mt-8 flex max-w-[554px] flex-col border-t border-gray-500 pt-8 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-0"
                >
                    <Heading size="h2" className="!text-4xl text-white">
                        Cody for Enterprise
                    </Heading>
                    <p className="mt-6 text-lg text-gray-200">
                        Cody for Enterprise provides context-aware answers based on your own private codebase. Contact
                        our sales team to learn more.
                    </p>
                    <Link href="#contact-form" title="Cody access form" className="btn btn-inverted-primary mt-1 w-fit">
                        Get Cody for work
                    </Link>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default CodyPage
