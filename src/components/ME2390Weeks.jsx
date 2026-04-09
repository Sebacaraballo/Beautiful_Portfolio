import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const weeks = [
  {
    label: "Week 1 — Introduction to Data Science & Python Basics",
    description: "Set up the Python environment and covered the fundamentals: variables, types, lists, and basic control flow. The homework introduced the Jupyter Notebook workflow and wrote first scripts to manipulate and print data.",
  },
  {
    label: "Week 2 — Data Arrays & Numerical Python",
    description: "Introduced NumPy arrays and vectorized operations. Covered array indexing, slicing, broadcasting, and the performance advantages of numerical Python over plain lists — the foundation for all scientific computing work that followed.",
  },
  {
    label: "Week 3 — Data Loading & Selection",
    description: "Worked with real datasets using NumPy and basic file I/O. Covered loading CSVs, selecting rows and columns by condition, and filtering data — the practical data wrangling skills used in every subsequent assignment.",
  },
  {
    label: "Week 4 — Data Visualization",
    description: "Built plots using Matplotlib: line charts, scatter plots, histograms, and subplots. Focused on making visualizations that actually communicate something — axis labels, titles, and choosing the right chart type for the data.",
  },
  {
    label: "Week 5 — Functions, Data Manipulation & Models",
    description: "Wrote reusable Python functions and applied them to data transformation tasks. Introduced the concept of fitting a simple model to data — the first step toward the statistical modeling work in later weeks.",
  },
  {
    label: "Week 6 — Conditionals & Loops",
    description: "Deepened control flow skills with conditionals, for/while loops, and list comprehensions. Applied these to data processing tasks that required iterating over datasets and making decisions based on values.",
  },
  {
    label: "Week 7 — Probability as a Measure of Uncertainty",
    description: "Introduced probability theory from an engineering perspective — framing uncertainty in measurements and predictions as something that can be modeled and quantified rather than just acknowledged.",
  },
  {
    label: "Week 8 — The Basic Rules of Probability",
    description: "Covered addition and multiplication rules, conditional probability, and independence. Applied these rules to engineering scenarios to compute likelihoods of compound events.",
  },
  {
    label: "Week 9 — Discrete Random Variables",
    description: "Introduced discrete probability distributions: Bernoulli, binomial, and Poisson. Computed expected values, variances, and probabilities using both formulas and NumPy simulations.",
  },
  {
    label: "Week 10 — Continuous Random Variables",
    description: "Extended random variable concepts to continuous distributions — uniform, exponential, and normal. Worked with probability density functions and cumulative distribution functions to answer engineering probability questions.",
  },
  {
    label: "Week 11 — Expectation & Variance",
    description: "Deepened understanding of expectation and variance as summary statistics, including the law of total expectation and variance of sums. Applied these to analyze variability in engineering measurements.",
  },
  {
    label: "Week 12 — Normal Distribution, Quantiles & Credible Intervals",
    description: "The normal distribution's central role in engineering and statistics. Covered z-scores, quantile functions, and credible intervals as a way to communicate uncertainty in estimates — a Bayesian framing of confidence.",
  },
  {
    label: "Week 13 — Fitting Models with Maximum Likelihood",
    description: "Introduced maximum likelihood estimation (MLE) as a principled method for fitting parametric models to data. Implemented MLE numerically for common distributions and evaluated goodness of fit.",
  },
  {
    label: "Week 14 — Covariance, Correlation & Linear Regression",
    description: "Covered the relationship between two variables: covariance, correlation coefficient, and simple linear regression. Fit lines to engineering datasets and interpreted slope and intercept in physical terms.",
  },
  {
    label: "Week 15 — Linear Regression Continued",
    description: "Extended regression to multiple predictors and polynomial fits. Evaluated model quality using residuals and R-squared, and discussed overfitting — the tradeoff between model complexity and generalization.",
  },
  {
    label: "Week 16 — Classification via Logistic Regression",
    description: "Introduced the first machine learning algorithm: logistic regression for binary classification. Applied it to an engineering dataset, interpreted the decision boundary, and evaluated performance with a confusion matrix.",
  },
];

export const ME2390Weeks = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col gap-3 mt-10">
      <h3 className="text-xl font-semibold text-foreground mb-2">Weekly Assignments</h3>
      {weeks.map((week, i) => (
        <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => toggle(i)}
            className="w-full flex justify-between items-center px-5 py-4 text-left hover:bg-primary/5 transition-colors duration-200"
          >
            <span className="font-semibold text-foreground text-sm">{week.label}</span>
            {openIdx === i
              ? <ChevronUp className="h-4 w-4 text-primary flex-shrink-0 ml-3" />
              : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 ml-3" />
            }
          </button>

          {openIdx === i && (
            <div className="px-5 pb-5 border-t border-border">
              <p className="text-foreground/70 text-sm leading-relaxed mt-4">
                {week.description}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
