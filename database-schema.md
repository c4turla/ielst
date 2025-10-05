# Database Schema for IELTS Prep AI

## Tables

### 1. users
Stores user account information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the user |
| email | text | UNIQUE, NOT NULL | User's email address |
| first_name | text | | User's first name |
| last_name | text | | User's last name |
| avatar_url | text | | URL to user's avatar image |
| created_at | timestamp | DEFAULT now() | When the user was created |
| updated_at | timestamp | DEFAULT now() | When the user was last updated |

### 2. subscriptions
Stores user subscription information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the subscription |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| plan_type | text | NOT NULL | Type of subscription (monthly, quarterly, yearly) |
| status | text | NOT NULL | Status of subscription (active, cancelled, expired) |
| started_at | timestamp | DEFAULT now() | When the subscription started |
| ends_at | timestamp | | When the subscription ends |
| created_at | timestamp | DEFAULT now() | When the subscription record was created |
| updated_at | timestamp | DEFAULT now() | When the subscription record was last updated |

### 3. speaking_tests
Stores speaking test records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the speaking test |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| test_type | text | NOT NULL | Type of test (part1, part2, part3, full) |
| audio_url | text | | URL to the recorded audio |
| band_score | decimal | | Overall band score (0-9) |
| fluency_score | decimal | | Fluency score (0-9) |
| lexical_score | decimal | | Lexical resource score (0-9) |
| grammar_score | decimal | | Grammatical range score (0-9) |
| pronunciation_score | decimal | | Pronunciation score (0-9) |
| feedback | text | | AI-generated feedback |
| created_at | timestamp | DEFAULT now() | When the test was created |
| updated_at | timestamp | DEFAULT now() | When the test was last updated |

### 4. writing_tests
Stores writing test records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the writing test |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| test_type | text | NOT NULL | Type of test (academic_task1, academic_task2, general_task1, general_task2) |
| essay_content | text | NOT NULL | Content of the essay |
| band_score | decimal | | Overall band score (0-9) |
| task_achievement_score | decimal | | Task achievement score (0-9) |
| coherence_score | decimal | | Coherence and cohesion score (0-9) |
| lexical_score | decimal | | Lexical resource score (0-9) |
| grammar_score | decimal | | Grammatical range score (0-9) |
| feedback | text | | AI-generated feedback |
| created_at | timestamp | DEFAULT now() | When the test was created |
| updated_at | timestamp | DEFAULT now() | When the test was last updated |

### 5. listening_tests
Stores listening test records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the listening test |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| test_type | text | NOT NULL | Type of test (section1, section2, section3, section4, full) |
| correct_answers | integer | NOT NULL | Number of correct answers |
| total_questions | integer | NOT NULL | Total number of questions |
| band_score | decimal | | Calculated band score |
| created_at | timestamp | DEFAULT now() | When the test was created |
| updated_at | timestamp | DEFAULT now() | When the test was last updated |

### 6. reading_tests
Stores reading test records.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the reading test |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| test_type | text | NOT NULL | Type of test (academic, general_training) |
| correct_answers | integer | NOT NULL | Number of correct answers |
| total_questions | integer | NOT NULL | Total number of questions |
| band_score | decimal | | Calculated band score |
| created_at | timestamp | DEFAULT now() | When the test was created |
| updated_at | timestamp | DEFAULT now() | When the test was last updated |

### 7. study_plans
Stores user study plans.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the study plan |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| title | text | NOT NULL | Title of the study plan |
| description | text | | Description of the study plan |
| target_score | decimal | NOT NULL | Target IELTS score |
| start_date | date | NOT NULL | Start date of the study plan |
| end_date | date | NOT NULL | End date of the study plan |
| is_active | boolean | DEFAULT true | Whether the study plan is active |
| created_at | timestamp | DEFAULT now() | When the study plan was created |
| updated_at | timestamp | DEFAULT now() | When the study plan was last updated |

### 8. study_plan_activities
Stores activities within a study plan.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the activity |
| study_plan_id | uuid | REFERENCES study_plans(id), NOT NULL | Foreign key to study_plans table |
| title | text | NOT NULL | Title of the activity |
| description | text | | Description of the activity |
| activity_type | text | NOT NULL | Type of activity (reading, writing, speaking, listening) |
| scheduled_date | date | NOT NULL | Scheduled date for the activity |
| is_completed | boolean | DEFAULT false | Whether the activity is completed |
| created_at | timestamp | DEFAULT now() | When the activity was created |
| updated_at | timestamp | DEFAULT now() | When the activity was last updated |

### 9. user_progress
Stores user progress tracking data.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the progress record |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| skill_type | text | NOT NULL | Type of skill (speaking, writing, listening, reading) |
| current_band_score | decimal | | Current band score for the skill |
| target_band_score | decimal | | Target band score for the skill |
| streak_days | integer | DEFAULT 0 | Number of consecutive days of practice |
| last_practice_date | date | | Last date of practice |
| created_at | timestamp | DEFAULT now() | When the progress record was created |
| updated_at | timestamp | DEFAULT now() | When the progress record was last updated |

### 10. ai_recommendations
Stores AI-generated recommendations for users.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier for the recommendation |
| user_id | uuid | REFERENCES users(id), NOT NULL | Foreign key to users table |
| recommendation_type | text | NOT NULL | Type of recommendation (study_plan, practice_focus, improvement_area) |
| content | text | NOT NULL | Content of the recommendation |
| is_dismissed | boolean | DEFAULT false | Whether the recommendation has been dismissed |
| created_at | timestamp | DEFAULT now() | When the recommendation was created |

## Relationships

- A user can have one subscription (one-to-one)
- A user can have multiple speaking tests (one-to-many)
- A user can have multiple writing tests (one-to-many)
- A user can have multiple listening tests (one-to-many)
- A user can have multiple reading tests (one-to-many)
- A user can have multiple study plans (one-to-many)
- A study plan can have multiple activities (one-to-many)
- A user can have multiple progress records (one-to-many)
- A user can have multiple AI recommendations (one-to-many)

## Indexes

For better performance, the following indexes should be created:

1. users_email_idx on users(email)
2. subscriptions_user_id_idx on subscriptions(user_id)
3. speaking_tests_user_id_idx on speaking_tests(user_id)
4. writing_tests_user_id_idx on writing_tests(user_id)
5. listening_tests_user_id_idx on listening_tests(user_id)
6. reading_tests_user_id_idx on reading_tests(user_id)
7. study_plans_user_id_idx on study_plans(user_id)
8. study_plan_activities_study_plan_id_idx on study_plan_activities(study_plan_id)
9. user_progress_user_id_idx on user_progress(user_id)
10. ai_recommendations_user_id_idx on ai_recommendations(user_id)

## Row Level Security (RLS) Policies

Supabase uses Row Level Security (RLS) to ensure users can only access their own data. The following policies should be implemented:

1. users table:
   - Users can select their own user data
   - Users can update their own user data

2. subscriptions table:
   - Users can select their own subscription data
   - Users can insert their own subscription data
   - Users can update their own subscription data

3. speaking_tests, writing_tests, listening_tests, reading_tests tables:
   - Users can select their own test data
   - Users can insert their own test data
   - Users can update their own test data

4. study_plans table:
   - Users can select their own study plans
   - Users can insert their own study plans
   - Users can update their own study plans

5. study_plan_activities table:
   - Users can select activities for their own study plans
   - Users can insert activities for their own study plans
   - Users can update activities for their own study plans

6. user_progress table:
   - Users can select their own progress data
   - Users can insert their own progress data
   - Users can update their own progress data

7. ai_recommendations table:
   - Users can select their own recommendations
   - Users can update their own recommendations (to mark as dismissed)