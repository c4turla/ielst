# AI-Powered IELTS Exam Preparation SaaS

## Business Requirements Document (BRD)

**Project Title:** AI-Powered IELTS Exam Preparation SaaS

**Version:** 1.0
**Date:** October 6, 2025
**Prepared By:** Kendariweb.com

## Project Overview

This project is a Next.js application with DaisyUI theme for the AI-Powered IELTS Exam Preparation SaaS platform. The application provides full IELTS mock tests (Listening, Reading, Writing, Speaking) leveraging AI for automatic scoring, detailed feedback, and personalized study plans.

## Technology Stack

- **Frontend Framework:** Next.js 15.5.4
- **Styling:** Tailwind CSS with DaisyUI
- **Language:** TypeScript

1. Introduction and Objectives

1.1 Document Purpose

This document outlines the business requirements for developing an AI-Powered IELTS Examination Simulation SaaS (Software as a Service) application. It serves as a clear guide for the development team and stakeholders, ensuring the final product aligns with business goals, user needs, and project scope.

1.2 Project Background

    The Problem: Prospective IELTS test-takers lack access to accurate, instantaneous, and objective scoring, particularly for the Speaking and Writing modules, leading to slow and costly preparation.

    The Solution Vision: To create a leading SaaS platform offering full IELTS mock tests (Listening, Reading, Writing, Speaking) leveraging AI for automatic scoring, detailed feedback, and personalized study plans.

    Target Users: Students (high school/university), professionals, and anyone planning to take the IELTS Academic or General Training exams.

1.3 Business Goals 🎯

    Achieve 10,000 paid subscribers within the first 12 months post-launch.

    Maintain a monthly user retention rate above 70%.

    Establish the platform as the market leader with the highest AI scoring accuracy for IELTS Speaking and Writing.

    Achieve a Customer Satisfaction (CSAT) score above 4.5/5.

2. Project Scope

2.1 In-Scope Features

Module	Feature	Description
Full Simulation	Complete Mock Tests	Provide full-length tests for Listening, Reading, Writing, and Speaking, matching the official IELTS format (Academic/General).
AI Speaking Assistant	Speaking Assessment & Feedback	Users record their answers; the AI scores based on official IELTS criteria (Fluency, Lexical Resource, Grammar, Pronunciation), providing a Band Score and specific, actionable feedback.
AI Writing Grader	Writing Assessment & Correction	Users input their essays (Task 1 & 2); the AI provides a Band Score, plus corrections for grammar, structure, cohesion, and vocabulary usage.
Listening & Reading	Automated Scoring	Interactive question types with instant scoring and detailed rationales for correct answers.
Progress Dashboard	Performance Analytics	Tracking of Band Scores per session, progress graphs, identification of weak areas, and comparison against target scores.
Personalized Learning	AI Study Recommendations	Based on test results, the AI recommends specific lessons, extra practice materials, and areas of focus.
SaaS Subscription System	Subscription & Billing	Features for registration, package selection (monthly/quarterly/yearly), secure payment processing, and subscription management.

2.2 Out-of-Scope Features

    Official IELTS certification or testing center services.

    Live, one-on-one tutoring sessions with human tutors.

    Preparation materials for other language exams (TOEFL, PTE, etc.).

3. Requirements Detail

3.1 Functional Requirements (FR)

ID	Requirement Description	Related Module
FR001	Users must be able to register and log in via email or social media accounts.	Access & Account
FR002	The system must allow users to select their required test type (Academic or General Training).	Simulation
FR003	Users must be able to upload an audio recording of their Speaking responses.	Speaking AI
FR004	The AI system shall process the Speaking audio and display the Band Score within a maximum of 5 minutes.	Speaking AI
FR005	The system must accept text input for Writing Task 1 & 2 and return a score and detailed feedback within 3 minutes.	Writing AI
FR006	The application must feature an integrated payment gateway for secure transaction processing.	Payments
FR007	Users must be able to view a history and detailed breakdown of all previously taken mock tests.	Dashboard
FR008	The system must provide justification/explanations for all correct and incorrect answers in the Listening and Reading sections.	L&R

3.2 Non-Functional Requirements (NFR)

ID	Category	Requirement Description
NFR001	Performance	Page load time shall be under 2 seconds for standard pages.
NFR002	Availability	System uptime must be a minimum of 99.9% per month.
NFR003	Security	User data and financial transactions must be protected with SSL/TLS encryption.
NFR004	Scalability	The application must be capable of supporting up to 10,000 concurrent users without significant performance degradation.
NFR005	Usability	The User Interface (UI/UX) must be intuitive, minimalist, and accurately replicate the experience of the official computer-delivered IELTS exam.
NFR006	Compatibility	The platform must be fully responsive and functional on all major web browsers (Chrome, Firefox, Safari) and mobile devices.

4. Analysis and Constraints

4.1 Key Stakeholders

    Product Owner/CEO: Accountable for project vision and ROI.

    Technology Team: Responsible for technical implementation and infrastructure.

    IELTS Subject Matter Experts (SMEs): Responsible for content accuracy and AI model validation.

    End-Users: The test-takers who will subscribe to the service.

4.2 Key Risks

Risk	Impact	Mitigation Strategy
Low AI Scoring Accuracy	Loss of credibility, high churn rate.	Rigorous validation of the AI model against human SME scoring; A/B testing of AI scores vs. human scores.
High AI Infrastructure Costs	Reduced profit margins.	Optimize the AI model for efficient processing; Utilize cost-effective cloud provider services.
Copyright Infringement of IELTS content.	Legal action, reputational damage.	Create 100% original exam content that only mimics the format and difficulty level of the official test.

4.3 Assumptions

    Content Assumption: All Listening and Reading practice materials will be created exclusively and originally.

    Technology Assumption: Cloud infrastructure (e.g., AWS, Google Cloud) capable of handling heavy AI workloads (audio/text processing) is readily available and budgeted for.

    Business Assumption: The market willingness to pay for an accurate, AI-driven IELTS preparation subscription service is sufficient to meet business goals.

5. Success Criteria

The project will be deemed successful if the following criteria are met:

    All critical Functional Requirements (FR) have been implemented and validated.

    All critical Non-Functional Requirements (NFR), especially those related to performance and security, are achieved.

    The Band Scores generated by the AI for Speaking and Writing modules show a minimum of 90% correlation with scores given by certified human examiners.

    The Business Goals (as defined in Section 1.3) are on track to be achieved within the set timelines.
