export const questions = [
    {
      heading: 'Prediction',
      questions: [
        {
          id: 'prediction_overall_rating',
          type: 'select',
          label: 'Overall rating?*',
          options: [
            {
              display: '0 - Deeply wrong, should not be used',
              value: 0,
            },
            {
              display: '1 - Significant issues, ok for aggregations',
              value: 1,
            },
            { display: '2 - could be improved', value: 2 },
            {
              display: '3 - looks good based on my knowledge of the species',
              value: 3,
            },
          ],
        },
        {
          id: 'prediction_variables_make_sense',
          type: 'select',
          label: 'Do the important variables make sense?',
          options: [
            {
              display: '',
              value: 'N/A',
            },
            {
              display: 'Yes',
              value: 'yes',
            },
            {
              display: 'No',
              value: 'no',
            },
          ],
        },
        {
          id: 'prediction_issues_present',
          type: 'select-checkbox',
          label: 'Are there any issues with the binary map?',
          options: [
            {
              display: 'Edges underpredicted',
              value: 'edges_underpredicted',
            },
            {
              display: 'Edges overpredicted',
              value: 'edges_overpredicted',
            },
            {
              display: 'Overly fragmented/disjunct',
              value: 'overly_fragmented_disjunct',
            },
            {
              display: 'Hard edges in predictions',
              value: 'hard_edges_in_predictions',
            },
            {
              display: 'Geometric shapes in predictions',
              value: 'geometric_shapes_in_predictions',
            },
            {
              display: 'Apparent effect of state or political boundaries',
              value: 'political_boundaries_present',
            },
            {
              display: 'Other artifacts',
              value: 'Other artifacts',
            },
          ],
        },
        {
          id: 'prediction_issues_present_additional',
          type: 'input',
          label: 'Are there any additional issues?',
          placeholder: '...',
        },
        {
          id: 'prediction_comments',
          type: 'input',
          label: 'General comments?',
          placeholder: '...',
        },
        {
          id: 'alternative_threshold',
          type: 'input',
          label: 'Alternative Threshold?',
          placeholder: '...',
        },
        {
          id: 'alternative_model',
          type: 'select',
          label: 'From the pdf, which model is better?',
          options:
            [...Array(11).keys()].map(i => {
              i = i - 1;
              if (i == -1) return { display: "None", value: -1 }
              let right = i % 2 == 0;
              let row = Math.round((i + 1) / 2);
              return {
                display: `row: ${row}, ${right ? "right" : "left"}`,
                value: i
              }
            }),
        },
      ],
    },
    {
      heading: 'Points',
      questions: [
        {
          id: 'points_issues_present',
          type: 'select-checkbox',
          label: 'Are there any issues with the occurrences?',
          options: [
            {
              display: 'Missing critical known subpopulation',
              value: 'missing_subpopulation',
            },
            {
              display: 'Possible outliers',
              value: 'outliers',
            },
            {
              display: 'Possible Cleaning failure',
              value: 'cleaning_outliers_failure',
            },
            {
              display: 'Severe sampling bias',
              value: 'sampling_bias',
            },
          ],
        },
        {
          id: 'points_comments',
          type: 'input',
          label: 'General points comments?',
          placeholder: '...',
        },
      ],
    },
    {
      heading: 'Range',
      questions: [
        {
          id: 'range_issues_present',
          type: 'select-checkbox',
          label: 'Are there any issues with the range?',
          options: [
            {
              display: 'Range map imprecise',
              value: 'range_map_imprecise',
            },
            {
              display: 'Range map too broad',
              value: 'range_map_too_broad',
            },
            {
              display: 'Range map missing subpopulation',
              value: 'range_map_missing_subpopulation',
            },
          ],
        },
        {
          id: 'range_comments',
          type: 'input',
          label: 'General rangemap comments?',
          placeholder: '...',
        },
      ],
    },
    {
      heading: 'Taxonomy feedback',
      questions: [
        {
          id: 'taxonomy_comments',
          type: 'input',
          label: 'Are there any taxonomic issues with any part of this species?',
          placeholder: '...',
        },
      ],
    },
  ];
  
  export const required = ['prediction_overall_rating'];
  // Are there any taxonomic issues with any part of this species? ______
  
  
  export const commonProblems = [
    {
      title: 'Prediction: False presence',
      name: 'fb_false_presence',
      description: 'fb_false_presence_desc'
    },
    {
      title: 'Prediction: False absence',
      name: 'fb_false_absence',
      description: 'fb_false_absence_desc'
    },
    {
      title: 'Prediction: Alternate presence threshold',
      name: 'fb_alt_threshold',
      description: 'fb_alt_threshold_desc'
    },
    {
      title: 'Prediction: Artificial shapes/lines',
      name: 'fb_pred_artifacts',
      description: 'fb_pred_artifacts_desc'
    },
    {
      title: 'Prediction: Does not match expert range',
      name: 'fb_range_not_matched',
      description: 'fb_range_not_matched_desc'
    },
    {
      title: 'Occurrence: Erroneous occurrences',
      name: 'fb_points_issue',
      description: 'fb_points_issue_desc'
    },
    {
      title: 'Other: Species is not native to the range',
      name: 'fb_nonnative',
      description: 'fb_nonnative_desc'
    },
    {
      title: 'Other: Taxonomic issue',
      name: 'fb_tax_issue',
      description: 'fb_tax_issue_desc'
    },
    {
      title: 'Other: Technical issue',
      name: 'fb_tech_issue',
      description: 'fb_tech_issue_desc'
    },
    {
      title: 'Other',
      name: 'fb_other',
      description: 'fb_other_desc'
    }
  
  ]