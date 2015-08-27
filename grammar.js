rasa
  = ws value:value ws { return value; }

begin_array     = ws "[" ws
begin_clause    = ws "{" ws
end_array       = ws "]" ws
end_clause      = ws "}" ws
value_separator = ws "," ws
or = ws "or" ws
and = ws "and" ws

ws "whitespace" = [ \t\n\r]*

/* ----- 3. Values ----- */

value
  = false
  / statements

false = "false" { return false; }


/* ----- 4. Objects ----- */

statement
      = goto
      / while
      / if
goto
      = 'goto ' ws color:color ws other:other_colors*
      { return { tag:"goto", color:color, other }; }

other_colors
      = or  color:color
      { return { color}; }

color
      = 'white'
      / 'black'
      / 'yellow'
      / 'purple'
      / 'orange'
      / 'light_blue'
      / 'red'
      / 'buff'
      / 'grey'
      / 'green'
      / 'purplish_pink'
      / 'blue'
      / 'yellowish_pink'
      / 'violet'
      / 'orange_yellow'
      / 'purplish_red'
      / 'greenish_yellow'
      / 'reddish_brown'
      / 'yellow_green'
      / 'yellowish_brown'
      / 'reddish_orange'
      / 'olive_green'
       { return value}

while
      = 'while ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"while", condition:condition , body:body }; }

if
      = 'if ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"if", condition:condition , body:body }; }

statements
      = statement*

disjunction
  = left:conjunction or right:disjunction { return{left, op:'or', right}; }
  / conjunction

conjunction
  = left:primary and right:conjunction {  return{left, op:'and', right}; }
  / primary

primary
  = condition
  / "(" disjunction:disjunction ")" {  return{statement:disjunction}; }



condition
      =  node:node ws verb:verb ws color:color ws
     { return { node:node, verb:verb , color:color }; }

node
      = 'current'
      / 'neighbor'
      / hops:integer ws 'hops further' { return hops }
verb
      = 'is'
      / 'not'

integer "integer"
  = digits:[0-9]+ { return digits.join(""); }

hexdigit = [0-9a-f]i

--------------------
rasa
  = ws value:value ws { return value; }

begin_array     = ws "[" ws
begin_clause    = ws "{" ws
end_array       = ws "]" ws
end_clause      = ws "}" ws
value_separator = ws "," ws
or = ws "or" ws
and = ws "and" ws

ws "whitespace" = [ \t\n\r]*

/* ----- 3. Values ----- */

value
  = false
  / statements

false = "false" { return false; }


/* ----- 4. Objects ----- */

statement
      = goto
      / while
      / if
goto
      = 'بروبه ' ws color:color ws other:other_colors*
      { return { tag:"goto", color:color, other }; }

other_colors
      = or  color:color
      { return { color}; }

color
      = 'سفید'
      / 'سیاه'
      / 'زرد'
      / 'یاسی'
      / 'نارنجی'
      / 'آسمانی'
      / 'قرمز'
      / 'خردلی'
      / 'طوسی'
      / 'سبز'
      / 'سرخابی'
      / 'آبی'
      / 'صورتی'
      / 'بنفش'
      / 'orange_yellow'
      / 'purplish_red'
      / 'greenish_yellow'
      / 'reddish_brown'
      / 'yellow_green'
      / 'yellowish_brown'
      / 'reddish_orange'
      / 'olive_green'
       { return value}

while
      = 'while ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"while", condition:condition , body:body }; }

if
      = 'if ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"if", condition:condition , body:body }; }

statements
      = statement*

disjunction
  = left:conjunction or right:disjunction { return{left, op:'or', right}; }
  / conjunction

conjunction
  = left:primary and right:conjunction {  return{left, op:'and', right}; }
  / primary

primary
  = condition
  / "(" disjunction:disjunction ")" {  return{statement:disjunction}; }



condition
      =  node:node ws verb:verb ws color:color ws
     { return { node:node, verb:verb , color:color }; }

node
      = 'current'
      / 'neighbor'
      / hops:integer ws 'hops further' { return hops }
verb
      = 'is'
      / 'not'

integer "integer"
  = digits:[0-9]+ { return digits.join(""); }

hexdigit = [0-9a-f]i

---------------------------

rasa
  = ws value:value ws { return value; }

begin_array     = ws "[" ws
begin_clause    = ws "{" ws
end_array       = ws "]" ws
end_clause      = ws "}" ws
value_separator = ws "," ws
or = ws "یا" ws
and = ws "و" ws

ws "whitespace" = [ \t\n\r]*

/* ----- 3. Values ----- */

value
  = false
  / statements

false = "false" { return false; }


/* ----- 4. Objects ----- */

statement
      = goto
      / while
      / if
goto
      = 'بروبه ' ws color:color ws other:other_colors*
      { return { tag:"goto", color:color, other }; }

other_colors
      = or  color:color
      { return { color}; }

color
      = 'سفید'
      / 'سیاه'
      / 'زرد'
      / 'یاسی'
      / 'نارنجی'
      / 'آسمانی'
      / 'قرمز'
      / 'خردلی'
      / 'طوسی'
      / 'سبز'
      / 'سرخابی'
      / 'آبی'
      / 'صورتی'
      / 'بنفش'
      / 'orange_yellow'
      / 'purplish_red'
      / 'greenish_yellow'
      / 'reddish_brown'
      / 'yellow_green'
      / 'yellowish_brown'
      / 'reddish_orange'
      / 'olive_green'
       { return value}

while
      = 'تازمانیکه ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"while", condition:condition , body:body }; }

if
      = 'اگر ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"if", condition:condition , body:body }; }

statements
      = statement*

disjunction
  = left:conjunction or right:disjunction { return{left, op:'or', right}; }
  / conjunction

conjunction
  = left:primary and right:conjunction {  return{left, op:'and', right}; }
  / primary

primary
  = condition
  / "(" disjunction:disjunction ")" {  return{statement:disjunction}; }



condition
      =  node:node  ws color:color ws verb:verb ws
     { return { node:node, verb:verb , color:color }; }

node
      = 'فعلی'
      / 'همسایه'
      / hops:integer ws 'گام جلوتر' { return hops }
verb
      = 'است'
      / 'نیست'

integer "integer"
  = digits:[0-9]+ { return digits.join(""); }

hexdigit = [0-9a-f]i
----------
rasa
  = ws value:value ws { return value; }

begin_array     = ws "[" ws
begin_clause    = ws "{" ws
end_array       = ws "]" ws
end_clause      = ws "}" ws
value_separator = ws "," ws
or = ws "یا" ws
and = ws "و" ws
semicolon = ws '؛' ws

ws "whitespace" = [ \t\n\r]*

/* ----- 3. Values ----- */

value
  = false
  / statements

false = "false" { return false; }


/* ----- 4. Objects ----- */

statement
      = goto
      / while
      / if
goto
      = 'بروبه ' ws color:color ws other:other_colors* semicolon
      { return { tag:"goto", color:color, other }; }

other_colors
      = or  color:color
      { return { color}; }

color
      = 'سفید'
      / 'سیاه'
      / 'زرد'
      / 'یاسی'
      / 'نارنجی'
      / 'آسمانی'
      / 'قرمز'
      / 'خردلی'
      / 'طوسی'
      / 'سبز'
      / 'سرخابی'
      / 'آبی'
      / 'صورتی'
      / 'بنفش'
      / 'olive_green'
       { return value}

while
      = 'تازمانیکه ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"while", condition:condition , body:body }; }

if
      = 'اگر ' ws condition:disjunction* begin_clause body:statements ws "}" ws
      { return { tag:"if", condition:condition , body:body }; }

statements
      = statement*

disjunction
  = left:conjunction or right:disjunction { return{left, op:'or', right}; }
  / conjunction

conjunction
  = left:primary and right:conjunction {  return{left, op:'and', right}; }
  / primary

primary
  = condition
  / "(" disjunction:disjunction ")" {  return{statement:disjunction}; }



condition
      =  node:node  ws color:color ws verb:verb ws
     { return { node:node, verb:verb , color:color }; }

node
      = 'فعلی'
      / 'همسایه'
      / hops:integer ws 'گام جلوتر' { return hops }
verb
      = 'است'
      / 'نیست'

integer "integer"
  = digits:[0-9]+ { return digits.join(""); }

hexdigit = [0-9a-f]i