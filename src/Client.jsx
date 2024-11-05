import { createClient } from '@supabase/supabase-js'

const URL = 'https://cxuxwccjmrogyuorzqnm.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN4dXh3Y2NqbXJvZ3l1b3J6cW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3Njg2MzksImV4cCI6MjA0NjM0NDYzOX0.r7TZaKiPa88jVxe-0GhUtbkrS6WlrH0v0oaF90wWa7E';

export const supabase = createClient(URL, API_KEY);
