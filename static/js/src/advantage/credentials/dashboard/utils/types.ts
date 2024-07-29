export type CredlyMetadata = {
  count: number;
  current_page: number;
  total_count: number;
  total_pages: number;
  per: number;
  previous_page_url: string | null;
  next_page_url: string | null;
};

export type CredlyBadge = {
  id: string;
  badge_template: {
    id: string;
    name: string;
  };
  issued_to: string;
  recipient_email: string;
  state: string;
};

export type Assessment = {
  id: number;
  address: {
    country_code: string;
  };
};

export type AssessmentReservationTA = {
  id: number;
  uuid: string;
  ability_screen: {
    id: number;
    name: string;
  };
  assessment: {
    id: number;
    state: string;
  };
  starts_at: string;
  user: {
    email: string;
    first_name: string;
    last_name: string;
    full_name: string;
  };
  state: string;
};

export type AssessmentReservationMeta = {
  total_pages: number;
  current_page: number;
  total_count: number;
};

export type ExamResultsTA = {
  id: number;
  user_email: string;
  score: number;
  duration_in_minutes: number;
  uuid: string;
  ability_screen: {
    id: number;
    cutoff_score: number;
    display_name: string;
  };
  result_url: string;
};

export type ExamResultsMeta = {
  current_page: number;
  next_page: number;
  prev_page: number;
  total_count: number;
  total_pages: number;
};
